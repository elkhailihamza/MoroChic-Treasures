import { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";
import { useProduct } from "../../contexts/ProductContext";

export const Explore = () => {
  const [productsAreLoading, setProductsAreLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const { fetchProductsBySearchValue, products } = useProduct();
  useEffect(() => {
    setProductsAreLoading(true);
    fetchProductsBySearchValue(searchValue ?? "");
    setProductsAreLoading(false);
  }, [searchValue]);
  return productsAreLoading ? (
    <div className="h-screen flex justify-center items-center">
      <SpinnerCircular size={40} color="#000000" />
    </div>
  ) : (
    <div></div>
  );
};
