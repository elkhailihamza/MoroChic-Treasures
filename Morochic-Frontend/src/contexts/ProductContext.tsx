import {
  ChangeEvent,
  FormEvent,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import axiosClient from "../axios";
import { NOTFOUND, UNAUTHORIZED, VENDORCREATE, router } from "../App";

interface ProductProviderProps {
  children: ReactNode;
}

type productType = Array<{
  id?: string;
  title?: string;
  price?: string;
  "mini-body"?: string;
  body?: string;
  stock?: string;
  category?: string;
  images?: File[];
}>;

type categoryType = {
  id: string;
  category_name: string;
  info: string;
};

type dataType = {
  id?: string;
  title?: string;
  price?: string;
  "mini-body"?: string;
  body?: string;
  stock?: string;
  category?: string;
  images?: File[];
};

type ProductContextProps = {
  fetchInfo: (id: number) => Promise<void>;
  handleProductInfoChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleProductSubmit: (e: FormEvent<HTMLFormElement>) => void;
  wishlistItem: (id: number, isWishlisted: boolean) => Promise<boolean>;
  setSelectedImage: (image: string | undefined) => void;
  setIsProductLoading: (isLoading: boolean) => void;
  checkWishListItem: (id: number) => Promise<boolean>;
  addToCart: (product: number) => void;
  getCartItems: () => void;
  checkCartItem: (id: number) => void;
  setSelectedCategory: (value: categoryType) => void;
  fetchCategories: () => Promise<void>;
  categories?: categoryType[];
  selectedCategory?: categoryType;
  hasAddedToCart?: boolean;
  cartItems?: productType;
  hasWishlisted?: boolean;
  selectedProduct?: dataType;
  isProductLoading?: boolean;
  imageUrls?: string[] | undefined;
  selectedImage?: string | undefined;
  productData: dataType;
  wishlistButtonIsLoading?: boolean;
};

const ProductContext = createContext<ProductContextProps>({
  fetchInfo: () => Promise.resolve(),
  handleProductInfoChange: () => {},
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
  productData: {},
});

export const useProduct = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [categories, setCategories] = useState<categoryType[]>();
  const [selectedCategory, setSelectedCategory] = useState<categoryType>();
  const [isProductLoading, setIsProductLoading] = useState<boolean>(true);
  const [hasWishlisted, setHasWishlisted] = useState<boolean>(false);
  const [wishlistButtonIsLoading, setWishlistButtonIsLoading] =
    useState<boolean>(true);
  const [cartItems, setCartItems] = useState<productType>();
  const [hasAddedToCart, setHasAddedToCart] = useState<boolean>();
  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const [selectedProduct, setSelectedProduct] = useState<dataType>();
  const [imageUrls, setImageUrls] = useState<string[]>();
  const [productData, setProductData] = useState({
    title: "",
    price: "",
    "mini-Body": "",
    body: "",
    stock: "",
    category: "",
    images: [] as File[],
  });

  const handleProductInfoChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if ((e.target as HTMLInputElement).files && name === "images") {
      const files = (e.target as HTMLInputElement).files;
      if (files) {
        const urls: string[] = [];
        const images: File[] = [];

        Array.from(files).forEach((file) => {
          const imageURL = URL.createObjectURL(file);
          urls.push(imageURL);
          images.push(file);
        });

        setSelectedImage(urls[0]);
        setImageUrls(urls);
        setProductData((prevProductData) => ({
          ...prevProductData,
          images: [...prevProductData.images, ...images],
        }));
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
      Object.entries(productData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => {
            formData.append(key, item);
          });
        } else {
          formData.append(key, value);
        }
      });
      const response = await axiosClient.post(
        "/vendor/products/store",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setProductData({
        title: "",
        price: "",
        "mini-Body": "",
        body: "",
        stock: "",
        category: "",
        images: [],
      });
      console.log(response);
      router.navigate(VENDORCREATE);
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
    const cart: number[] = cartString ? JSON.parse(cartString) : [];
    setHasAddedToCart(cart.includes(id));
  };

  const addToCart = (product: number) => {
    const cart = localStorage.getItem("cart");
    let Items: number[] = cart ? JSON.parse(cart) : [];
    if (!Array.isArray(Items)) {
      Items = [];
    }
    Items.push(product);
    localStorage.setItem("cart", JSON.stringify(Items));
  };

  const getCartItems = async () => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const parsedCart = JSON.parse(cart);
      console.log(parsedCart, Array.isArray(parsedCart));
      const response = await axiosClient.get("/product/cart/get", {
        params: {
          ids: parsedCart,
        },
      });
      setCartItems(response.data.products);
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

  const values = {
    fetchInfo,
    setSelectedImage,
    setIsProductLoading,
    handleProductInfoChange,
    handleProductSubmit,
    wishlistItem,
    checkWishListItem,
    addToCart,
    getCartItems,
    checkCartItem,
    fetchCategories,
    setSelectedCategory,
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
