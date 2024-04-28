import { Input } from "../../../components/Input";
import { Image } from "../../../components/Image";
import { ItemCard } from "../../../components/ItemCard";
import { RightPointingArrowSVG } from "../../../components/RightPointingArrowSVG";
import { useProduct } from "../../../contexts/ProductContext";

export const SecondStep = () => {
  const {
    handleProductInfoChange,
    imageUrls,
    selectedImage,
    setSelectedImage,
  } = useProduct();
  return (
    <>
      <h1 className="text-2xl font-medium">Second Step:</h1>
      <div className="grid grid-cols-1 w-full gap-5">
        <div className="md:px-16 w-full flex flex-col items-center gap-5 mt-5">
          <h1 className="text-xl font-medium">Image Upload</h1>
          <label
            htmlFor="image"
            className={`w-60 h-80 cursor-pointer ${
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
              {imageUrls && selectedImage && imageUrls.length > 0 ? (
                <Image
                  className="h-full w-full object-cover"
                  byDefault={false}
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
      </div>
    </>
  );
};
