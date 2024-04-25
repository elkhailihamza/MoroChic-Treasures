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
type productType = {
  id: string;
  title: string;
  body: string;
  stock: number;
};

type dataType = {
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
  selectedProduct: productType | undefined;
  isProductLoading: boolean;
  imageUrls: string[] | undefined;
  selectedImage: string | undefined;
  setSelectedImage: (image: string | undefined) => void;
  productData: dataType;
};

const ProductContext = createContext<ProductContextProps>({
  fetchInfo: () => Promise.resolve(),
  handleProductInfoChange: () => {},
  handleProductSubmit: () => {},
  selectedProduct: undefined,
  isProductLoading: true,
  imageUrls: [],
  selectedImage: "",
  setSelectedImage: () => {},
  productData: {},
});

export const useProduct = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [isProductLoading, setIsProductLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const [selectedProduct, setSelectedProduct] = useState();
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
      const response = await axiosClient.post(
        "/vendor/products/store",
        productData
      );
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
      setIsProductLoading(true);
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

  const values = {
    fetchInfo,
    selectedProduct,
    isProductLoading,
    handleProductInfoChange,
    handleProductSubmit,
    imageUrls,
    selectedImage,
    setSelectedImage,
    productData,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
