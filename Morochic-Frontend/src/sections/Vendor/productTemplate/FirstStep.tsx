import { Input } from "../../../components/Input";
import { Textarea } from "../../../components/TextArea";
import { useProduct } from "../../../contexts/ProductContext";

export const FirstStep = () => {
  const { handleProductInfoChange, productData } = useProduct();
  return (
    <>
      <h1 className="text-2xl font-medium">First Step:</h1>
      <div className="flex lg:flex-nowrap flex-wrap justify-center lg:gap-20 gap-10 md:px-20">
        <div className="lg:w-1/2 w-96">
          <h1 className="text-center font-medium text-xl mt-12 mb-10">
            Product Title and Price
          </h1>
          <Input
            name="title"
            type="text"
            placeholder="Title*"
            value={productData?.title}
            onChange={handleProductInfoChange}
          />
          <Input
            name="price"
            className="mt-7"
            value={productData?.price}
            onChange={handleProductInfoChange}
            placeholder="price*"
            max={5}
          />
        </div>
        <div className="lg:w-1/2 w-96">
          <h1 className="text-center font-medium text-xl lg:mt-12">
            A short description
          </h1>
          <Textarea
            name="mini-body"
            className="h-48 rounded mt-7"
            value={productData?.["mini-body"]}
            resize={false}
            onChange={handleProductInfoChange}
            placeholder="Mini Body*"
          />
        </div>
      </div>
    </>
  );
};
