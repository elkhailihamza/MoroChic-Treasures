import { Textarea } from "../../../components/TextArea";
import { useProduct } from "../../../contexts/ProductContext";

export const DescriptionSection = () => {
  const { productData, handleProductInfoChange } = useProduct();
  return (
    <div className="p-10">
      <h1 className="underline text-2xl font-medium">Description:</h1>
      <div className="p-10">
        <p>
          <Textarea
            name="body"
            maxLength={8000}
            className="w-full h-96"
            value={productData.body}
            onChange={handleProductInfoChange}
            base={false}
            placeholder="Description*"
            resize={false}
          />
        </p>
      </div>
    </div>
  );
};
