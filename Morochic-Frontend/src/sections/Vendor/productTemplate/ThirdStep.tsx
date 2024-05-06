import { Textarea } from "../../../components/TextArea";
import { useProduct } from "../../../contexts/ProductContext";

export const ThirdStep = () => {
  const { productData, handleProductInfoChange } = useProduct();
  return (
    <>
      <h1 className="text-2xl font-medium">Third Step:</h1>
      <div className="md:p-10">
        <h1 className="text-2xl font-medium text-center">Description:</h1>
        <p className="mt-5">
          <Textarea
            name="body"
            maxLength={8000}
            className="w-full h-96"
            value={productData?.body}
            onChange={handleProductInfoChange}
            placeholder="Description*"
            resize={false}
          />
        </p>
      </div>
    </>
  );
};
