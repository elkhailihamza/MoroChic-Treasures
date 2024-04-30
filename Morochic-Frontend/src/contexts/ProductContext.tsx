import React, {
  ChangeEvent,
  FormEvent,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import axiosClient from "../axios";
import { NOTFOUND, UNAUTHORIZED, router } from "../App";

interface ProductProviderProps {
  children: ReactNode;
}

type productType = {
  id?: number;
  title?: string;
  price?: number;
  "mini-body"?: string;
  body?: string;
  stock?: number;
  quantity?: number;
  category?: string;
  images?: File[];
};

type categoryType = {
  id: string;
  category_name: string;
  info: string;
};

// type productType = {
//   id: number;
//   quantity: number;
// };

// type productType = Array{
//   id?: string;
//   title?: string;
//   price?: string;
//   "mini-body"?: string;
//   body?: string;
//   stock?: string;
//   category?: string;
//   images?: File[];
// };

type ProductContextProps = {
  fetchInfo: (id: number) => Promise<void>;
  handleProductInfoChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleProductImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleProductSubmit: (e: FormEvent<HTMLFormElement>) => void;
  wishlistItem: (id: number, isWishlisted: boolean) => Promise<boolean>;
  setSelectedImage: (image: string | undefined) => void;
  setIsProductLoading: (isLoading: boolean) => void;
  checkWishListItem: (id: number) => Promise<boolean>;
  addToCart: (product: productType) => void;
  getCartItems: () => void;
  checkCartItem: (id: number) => void;
  setSelectedCategory: (value: categoryType) => void;
  fetchCategories: () => Promise<void>;
  fetchProductsBySearchValue: (searchValue: string) => Promise<void>;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  calculateTotalPrice: (item: productType[]) => void;
  totalPrice?: number;
  products?: productType;
  categories?: categoryType[];
  selectedCategory?: categoryType;
  hasAddedToCart?: boolean;
  cartItems?: productType[];
  hasWishlisted?: boolean;
  selectedProduct?: productType;
  isProductLoading?: boolean;
  imageUrls?: string[] | undefined;
  selectedImage?: string | undefined;
  productData: productType;
  wishlistButtonIsLoading?: boolean;
};

const ProductContext = createContext<ProductContextProps>({
  fetchInfo: () => Promise.resolve(),
  handleProductInfoChange: () => {},
  handleProductImageUpload: () => {},
  handleProductSubmit: () => {},
  wishlistItem: () => Promise.resolve(false),
  checkWishListItem: () => Promise.resolve(false),
  setIsProductLoading: () => {},
  setSelectedImage: () => {},
  addToCart: () => {},
  getCartItems: () => {},
  checkCartItem: () => {},
  setSelectedCategory: () => {},
  fetchCategories: () => Promise.resolve(),
  fetchProductsBySearchValue: () => Promise.resolve(),
  incrementQuantity: () => {},
  decrementQuantity: () => {},
  calculateTotalPrice: () => {},
  productData: {},
});

export const useProduct = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [categories, setCategories] = useState<categoryType[]>();
  const [selectedCategory, setSelectedCategory] = useState<categoryType>();
  const [isProductLoading, setIsProductLoading] = useState<boolean>(true);
  const [hasWishlisted, setHasWishlisted] = useState<boolean>(false);
  const [wishlistButtonIsLoading, setWishlistButtonIsLoading] =
    useState<boolean>(true);
  const [products, setProducts] = useState<productType>();
  const [hasAddedToCart, setHasAddedToCart] = useState<boolean>();
  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const [selectedProduct, setSelectedProduct] = useState<productType>();
  const [imageUrls, setImageUrls] = useState<string[]>();
  const [cartItems, setCartItems] = useState<productType[]>([]);
  const [productData, setProductData] = useState<productType>({
    title: "",
    price: 0,
    "mini-body": "",
    body: "",
    stock: 0,
    category: "",
    images: [],
  });

  const handleProductImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files;
    if (files) {
      const urls: string[] = [];
      const images: File[] = Array.from(files);

      images.forEach((file) => {
        const imageURL = URL.createObjectURL(file);
        urls.push(imageURL);
      });

      setSelectedImage(urls[0]);
      setImageUrls(urls);

      setProductData((prevProductData) => ({
        ...prevProductData,
        images: [...images],
      }));
    }
  };

  const handleProductInfoChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "price") {
      const regex = /^\d{0,5}(\.\d{0,2})?$/;
      if (!regex.test(value)) {
        return;
      }
    }

    if (name === "stock") {
      const stockValue = parseInt(value, 10);
      if (isNaN(stockValue) || stockValue < 1 || stockValue > 999) {
        return;
      }
    }

    setProductData((prevProductData) => ({
      ...prevProductData,
      [name]: value,
    }));
  };

  const handleProductSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      // productData.forEach((product) => {
      //   formData.append("title", product.title || "");
      //   formData.append("price", (product.price || 0).toString());
      //   formData.append("mini-body", product["mini-body"] || "");
      //   formData.append("body", product.body || "");
      //   formData.append("stock", (product.stock || 0).toString());
      //   formData.append("category", product.category || "");

      //   if (product.images) {
      //     product.images.forEach((file: File) => {
      //       formData.append("images[]", file);
      //     });
      //   }
      // });
      const response = await axiosClient.post(
        "/vendor/products/store",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      setProductData({
        title: "",
        price: 0,
        "mini-body": "",
        body: "",
        stock: 0,
        category: "",
        images: [],
      });
      // router.navigate(VENDORCREATE);
    } catch (error) {
      console.error(error);
    }
  };
  //   const handleImageSubmit = async () => {
  //     try {
  //         const response = await axiosClient.post("/vendor/product/image_upload", formData)
  //     }
  //   }
  const fetchInfo = async (id: number) => {
    try {
      const response = await axiosClient.get(`/product/get/${id}`);
      setSelectedProduct(response.data);
      setIsProductLoading(false);
    } catch (error: any) {
      if (error.request.status === 401) {
        router.navigate(UNAUTHORIZED);
      }
      router.navigate(NOTFOUND);
    }
  };

  const wishlistItem = async (id: number, isWishlisted: boolean) => {
    setWishlistButtonIsLoading(true);
    try {
      await axiosClient.post(`/wishlist/send`, {
        id: id,
        isWishlisted: isWishlisted,
      });
      setHasWishlisted(!isWishlisted);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setWishlistButtonIsLoading(false);
    }
  };

  const checkWishListItem = async (id: number) => {
    try {
      const response = await axiosClient.get(`/wishlist/check`, {
        params: { id: id },
      });
      setHasWishlisted(response.data.hasWishlisted);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const checkCartItem = (id: number) => {
    const cartString = localStorage.getItem("cart");
    const cart: productType[] = cartString ? JSON.parse(cartString) : [];
    const hasItem = cart.some((item) => item.id === id);
    setHasAddedToCart(hasItem);
  };

  const addToCart = (product: productType) => {
    const cartString = localStorage.getItem("cart");
    const cart: productType[] = cartString ? JSON.parse(cartString) : [];
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      return;
    } else {
      const completeProduct = product;
      completeProduct["quantity"] = 1;
      cart.push(completeProduct);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);
  };

  const getCartItems = () => {
    const cart = localStorage.getItem("cart");

    if (cart) {
      const parsedCart: productType[] = JSON.parse(cart);
      setCartItems(parsedCart);
    }
  };

  const calculateTotalPrice = (cartItems: productType[]) => {
    if (cartItems && cartItems.length > 0) {
      const totalPrice = cartItems.reduce((accumulator, item) => {
        if (
          item &&
          typeof item.price === "number" &&
          typeof item.quantity === "number"
        ) {
          const itemPrice = item.price * item.quantity;
          return accumulator + itemPrice;
        } else {
          return accumulator;
        }
      }, 0);
      setTotalPrice(totalPrice);
    } else {
      setTotalPrice(0);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axiosClient.get("/categories/get");
      setCategories(response.data.categories);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductsBySearchValue = async (searchValue: string) => {
    try {
      const response = await axiosClient.get("/product/get", {
        data: {
          searchValue: searchValue,
        },
      });
      setProducts(response.data.products);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const incrementQuantity = (id: string) => {
    const cart = JSON.parse(localStorage.getItem("cart") ?? "");
    const productIndex = cart.findIndex(
      (element: any) => element.id === parseInt(id)
    );
    if (parseInt(cart[productIndex].quantity) < cart[productIndex.stock]) {
      cart[productIndex].quantity = cart[productIndex].quantity + 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      setCartItems(cart);
    }
  };

  const decrementQuantity = (id: string) => {
    const cart = JSON.parse(localStorage.getItem("cart") ?? "");
    const productIndex = cart.findIndex(
      (element: any) => element.id === parseInt(id)
    );
    if (parseInt(cart[productIndex].quantity) > 1) {
      cart[productIndex].quantity = cart[productIndex].quantity - 1;
    } else {
      cart.splice(cart[productIndex], 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);
  };

  const values = {
    fetchInfo,
    setSelectedImage,
    setIsProductLoading,
    handleProductInfoChange,
    handleProductImageUpload,
    handleProductSubmit,
    wishlistItem,
    checkWishListItem,
    addToCart,
    getCartItems,
    checkCartItem,
    fetchCategories,
    setSelectedCategory,
    fetchProductsBySearchValue,
    incrementQuantity,
    decrementQuantity,
    calculateTotalPrice,
    totalPrice,
    products,
    categories,
    selectedCategory,
    hasAddedToCart,
    cartItems,
    selectedProduct,
    isProductLoading,
    hasWishlisted,
    imageUrls,
    selectedImage,
    productData,
    wishlistButtonIsLoading,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
