import { useEffect } from "react";
import { Input } from "../../../components/Input";
import { useProduct } from "../../../contexts/ProductContext";

export const FourthStep = () => {
  const {
    handleProductInfoChange,
    selectedCategory,
    setSelectedCategory,
    categories,
    productData,
    fetchCategories,
  } = useProduct();

  useEffect(() => {
    const fetch = async () => {
      await fetchCategories();
    };

    fetch();
  }, []);

  return (
    <div className="text-center flex flex-col justify-center items-center gap-5 p-10">
      <div className="text-center">
        <h1 className="text-2xl">One More Step..</h1>
      </div>
      <div className="mt-5">
        <select
          name="category"
          className="w-96 h-10 px-2"
          onChange={handleProductInfoChange}
          value={productData?.category}
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
        <div className="w-96 mt-5">
          <Input
            name="stock"
            value={productData?.stock}
            placeholder="Stock*"
            onChange={handleProductInfoChange}
          />
        </div>
      </div>
      {selectedCategory && Object.keys(selectedCategory).length > 0 ? (
        <>
          <div>
            <h1>Category Info: {selectedCategory.info}</h1>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
