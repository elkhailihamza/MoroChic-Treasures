import { Input } from "../../../components/Input";
import { Image } from "../../../components/Image";
import { ItemCard } from "../../../components/ItemCard";
import { ItemRatingSVG } from "../../../components/ItemRatingSVG";
import { RightPointingArrowSVG } from "../../../components/RightPointingArrowSVG";
import { Textarea } from "../../../components/TextArea";
import { useProduct } from "../../../contexts/ProductContext";

export const TopSection = () => {
  const {
    handleProductInfoChange,
    productData,
    imageUrls,
    selectedImage,
    setSelectedImage,
  } = useProduct();
  return (
    <div className="flex flex-wrap justify-around gap-10 px-7">
      <div className="grid grid-cols-1 w-96 gap-5">
        <div className="px-16 w-full justify-self-center">
          <label
            htmlFor="image"
            className={`w-full h-80 cursor-pointer ${
              imageUrls && imageUrls.length > 0
                ? ""
                : "hover:bg-gray-200 transition-all"
            } flex justify-center items-center border-dashed border-2 border-slate-600`}
          >
            <Input
              name="images"
              id="image"
              onChange={handleProductInfoChange}
              type="file"
              multiple={true}
              base={false}
              className="sr-only"
            />
            <span>
              {imageUrls && imageUrls.length > 0 ? (
                <Image
                  className="h-full w-full object-cover"
                  src={selectedImage}
                />
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
            </span>
          </label>
        </div>
        {imageUrls && imageUrls.length > 1 ? (
          <div className="flex justify-between">
            <div className="flex carousel gap-4 h-24">
              {imageUrls.map((url, key) => (
                <ItemCard
                  key={key}
                  className="carousel-item w-28 h-full rounded-xl rounded-[16px]"
                  base={false}
                  image={url}
                  onClick={() => setSelectedImage(url)}
                />
              ))}
            </div>
            <RightPointingArrowSVG
              className="border-s-0 h-full cursor-pointer hover:bg-slate-200 rounded-bl-none rounded-tl-none rounded-lg"
              width={"75"}
              opacity="1"
            />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="md:w-96 w-[80%] mt-2">
        <div className="flex justify-center">
          <Input
            name="title"
            base={false}
            className="text-center border-0"
            type="text"
            placeholder="Title*"
            value={productData.title}
            onChange={handleProductInfoChange}
          />
        </div>
        <div className="flex justify-between items-center mt-4 px-2">
          <h1 className="text-xl">
            <span className="text-[#BC6C25]">$</span>
            <Input
              name="price"
              value={productData.price}
              base={false}
              onChange={handleProductInfoChange}
              className="w-20 focus:outline-none rounded border-0"
              placeholder="price*"
              max={5}
            />
          </h1>
          <ItemRatingSVG />
        </div>
        <div className="mt-7">
          <Textarea
            name="mini-body"
            className="h-72 rounded w-full"
            value={productData['mini-body']}
            base={false}
            resize={false}
            onChange={handleProductInfoChange}
            placeholder="Mini Body*"
          />
        </div>
      </div>
    </div>
  );
};
