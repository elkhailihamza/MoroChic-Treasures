import { Link } from "react-router-dom";
import { useProduct } from "../contexts/ProductContext";
import { EXPLORE } from "../App";
import { SpinnerCircular } from "spinners-react";
import { useState } from "react";

interface SearchSuggestionsProps {
  open: boolean;
}

export const SearchSuggestions = ({ open }: SearchSuggestionsProps) => {
  const { products } = useProduct();
  const [searchOpen, setSearchOpen] = useState<boolean>(open);
  return (
    <>
      <div
        className={`${
          searchOpen ? "block" : "hidden"
        } absolute top-full rounded-tl-xl rounded-tr-xl left-0 bg-white border rounded z-10 w-full`}
      >
        {products ? (
          products.map((product, key) => (
            <Link
              to={"/catalog/product/" + product.id}
              onClick={() => setSearchOpen(open)}
              key={key}
              className="block w-full py-2 px-4 text-black hover:bg-gray-200"
            >
              {product.title}
            </Link>
          ))
        ) : (
          <div className="h-44 flex justify-center items-center">
            <SpinnerCircular size={40} color="#000000" />
          </div>
        )}
        <div className="w-full text-center p-4 border-slate-700">
          <Link to={EXPLORE} className="text-sm text-blue-600 hover:underline">
            Explore
          </Link>
        </div>
      </div>
    </>
  );
};
