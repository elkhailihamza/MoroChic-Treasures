import { ChangeEvent, FormEvent, useState } from "react";
import axiosClient from "../../axios";
import { useProduct } from "../../contexts/ProductContext";
import Button from "../../components/Button";
import { TopSection } from "../../sections/Vendor/productTemplate/TopSection";
import { DescriptionSection } from "../../sections/Vendor/productTemplate/DescriptionSection";
import { Input } from "../../components/Input";
import { SpinnerCircular } from "spinners-react";

type categoryType = {
  id: string;
  category_name: string;
  info: string;
};

export const ProductTemplate = () => {
  const [categories, setCategories] = useState<categoryType[]>();
  const [selectedCategory, setSelectedCategory] = useState<categoryType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [firstStep, setFirstStep] = useState<boolean>(false);
  const { handleProductSubmit, handleProductInfoChange, productData } =
    useProduct();

  const fetchCategories = async () => {
    try {
      const response = await axiosClient.get("/categories/get");
      setCategories(response.data.categories);
    } catch (error) {
      console.error(error);
    }
  };

  const goBack = () => {
    setFirstStep(false);
  };

  return (
    <div className="md:px-20 px-7 py-10">
      {firstStep ? (
        <div
          onClick={goBack}
          className="cursor-pointer w-40 flex gap-2 items-center mt-2 text-gray-600 hover:underline hover:text-gray-800 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H6M12 5l-7 7 7 7" />
          </svg>
          <span>Go back a Step</span>
        </div>
      ) : (
        <></>
      )}
      <form
        onSubmit={handleProductSubmit}
        className="mt-10"
        encType="multipart/form-data"
      >
        {firstStep ? (
          <>
            {isLoading ? (
              <div className="h-screen flex justify-center">
                <SpinnerCircular color="#000000" />
              </div>
            ) : (
              <>
                <div className="text-center flex flex-col justify-center items-center gap-5 p-10">
                    <div className="text-center">
                        <h1 className="text-2xl">
                            One More Step..
                        </h1>
                    </div>
                  <div className="mt-5">
                    <select
                      name="category"
                      className="w-96"
                      onChange={handleProductInfoChange}
                      value={productData.category}
                    >
                      <option value="" disabled hidden>
                        Categories*
                      </option>
                      {categories && categories.length > 0 ? (
                        categories.map((category, key) => (
                          <option
                            key={key}
                            onClick={() => setSelectedCategory(category)}
                            value={category.id}
                          >
                            {category.category_name}
                          </option>
                        ))
                      ) : (
                        <option disabled>No Category can be Found!</option>
                      )}
                    </select>
                    <Input
                      name="stock"
                      value={productData.stock}
                      placeholder="Stock*"
                      base={false}
                      className="border w-96 mt-5"
                      onChange={handleProductInfoChange}
                    />
                  </div>
                  {selectedCategory &&
                  Object.keys(selectedCategory).length > 0 ? (
                    <>
                      <div>
                        <h1>Category Info: {selectedCategory.info}</h1>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  <Button
                    type="submit"
                    className="text-white py-2 px-4 rounded"
                    base={false}
                    color="#000000"
                  >
                    Complete
                  </Button>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <TopSection />
            <DescriptionSection />
            <div className="text-center mt-4">
              {isLoading ? (
                <div className="flex justify-center">
                  <SpinnerCircular color="#000000" />
                </div>
              ) : (
                <Button
                  onClick={async () => {
                    setFirstStep(true);
                    setIsLoading(true);
                    await fetchCategories();
                    setIsLoading(false);
                  }}
                  className="text-white py-2 px-4 rounded"
                  base={false}
                  color="#000000"
                >
                  Next Step
                </Button>
              )}
            </div>
          </>
        )}
      </form>
    </div>
  );
};
