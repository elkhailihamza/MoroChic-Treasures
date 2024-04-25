import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/TextArea";
import Button from "../../components/Button";
import axiosClient from "../../axios";
import { SpinnerCircular } from "spinners-react";
import { VENDORTEMPLATE } from "../../App";

type productType = {
  id: string;
  title: string;
  body: string;
  stock: number;
};

export const NewProduct = () => {
  const [products, setProducts] = useState<productType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axiosClient.get("/vendor/products");
        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="px-20 py-16">
      <h1 className="text-2xl font-medium">Create</h1>
      <div className="p-6 flex flew-wrap gap-5">
        {products && products.length > 0 ? (
          products.map((product, key) => (
            <Link
              key={key}
              to={"/catalog/product/" + product.id}
              className="w-48 h-60 border-2 border-slate-600 rounded-xl flex flex-col bg-white cursor-pointer transition-all hover:bg-gray-100"
            >
              <div className="carousel h-full bg-gray-200 rounded-tl-xl rounded-tr-xl"></div>
              <div className="h-full text-sm flex justify-evenly items-center">
                <h1 className="text-center">
                  <span className="font-medium">Id</span> <br /> {product.id}
                </h1>
                <h1 className="text-center">
                  <span className="font-medium">Title</span> <br /> {product.title}
                </h1>
                <h1 className="text-center">
                  <span className="font-medium">Stock</span> <br /> {product.stock}
                </h1>
              </div>
            </Link>
          ))
        ) : (
          <div></div>
        )}
        <Link
          to={VENDORTEMPLATE}
          className="w-48 h-60 border-2 border-slate-600 border-dashed rounded-xl flex justify-center items-center hover:bg-gray-200 focus:bg-gray-200 cursor-pointer transition-all"
        >
          {isLoading ? (
            <SpinnerCircular color="#000000" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#828282"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )}
        </Link>
      </div>
    </div>
  );
};
