import { useProduct } from "../../../contexts/ProductContext";

export const DescriptionSection = () => {
  const { selectedProduct } = useProduct();

  return (
    <div className="p-10">
      <h1 className="underline text-2xl font-medium">Description:</h1>
      <div className="p-10">
        <p>{selectedProduct?.body}</p>
      </div>
    </div>
  );
};
