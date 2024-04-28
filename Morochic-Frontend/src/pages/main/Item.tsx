import { Link, useParams } from "react-router-dom";
import { Divider } from "../../components/Divider";
import { CustomerReviewsSection } from "../../sections/Main/item/CustomerReviewsSection";
import { DescriptionSection } from "../../sections/Main/item/DescriptionSection";
import { ReviewSection } from "../../sections/Main/item/ReviewSection";
import { TopSection } from "../../sections/Main/item/TopSection";
import { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";
import { useProduct } from "../../contexts/ProductContext";
import Button from "../../components/Button";
import { useAuth } from "../../contexts/AuthContext";
import { CART } from "../../App";

export const Item = () => {
  const { id } = useParams();
  const {
    fetchInfo,
    isProductLoading,
    wishlistItem,
    hasWishlisted,
    checkWishListItem,
    hasAddedToCart,
    checkCartItem,
    selectedProduct,
    addToCart,
  } = useProduct();
  const { isLoggedIn } = useAuth();

  const [wishlistIsLoading, setWishlistIsLoading] = useState(false);
  const [addToCartBtnIsLoading, setAddToCartBtnIsLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setInitialLoad(true);
      await fetchInfo(Number(id));
      await checkWishListItem(Number(id));
      await checkCartItem(Number(id));
      setInitialLoad(false);
    };

    fetchData();
  }, [id]);

  return isProductLoading ? (
    <div className="h-screen w-full flex flex-col justify-center items-center select-none">
      <SpinnerCircular color="#000000" />
      <h1 className="text-slate-800">Fetching Product...</h1>
    </div>
  ) : (
    <div className="md:px-20 px-7 py-20">
      <TopSection />
      {initialLoad ? (
        <div className="flex justify-center">
          <SpinnerCircular color="#000000" />
        </div>
      ) : (
        <div className="flex justify-center gap-5 p-4 mt-10">
          {isLoggedIn ? (
            wishlistIsLoading ? (
              <div className="me-10">
                <SpinnerCircular size={40} color="#000000" />
              </div>
            ) : hasWishlisted ? (
              <Button
                base={false}
                onClick={async () => {
                  setWishlistIsLoading(true);
                  await wishlistItem(Number(id), hasWishlisted);
                  setWishlistIsLoading(false);
                }}
                color="#C50000"
                className="text-white px-3 py-2 rounded-md"
              >
                Remove from Wishlist
              </Button>
            ) : (
              <Button
                base={false}
                onClick={async () => {
                  setWishlistIsLoading(true);
                  await wishlistItem(Number(id), hasWishlisted ? true : false);
                  setWishlistIsLoading(false);
                }}
                color="#000000"
                className="text-white px-3 py-2 rounded-md"
              >
                Add To Wishlist
              </Button>
            )
          ) : (
            <></>
          )}
          {addToCartBtnIsLoading ? (
            <div>
              <SpinnerCircular size={40} color="#000000" />
            </div>
          ) : hasAddedToCart ? (
            <Link
              to={CART}
              className="text-white px-3 py-2 rounded-md bg-[#606C38]"
            >
              Go to Cart!
            </Link>
          ) : (
            <Button
              base={false}
              color="#606C38"
              onClick={async () => {
                setAddToCartBtnIsLoading(true);
                if (selectedProduct && selectedProduct.id) {
                  addToCart(Number(selectedProduct.id));
                }
                setAddToCartBtnIsLoading(false);
              }}
              className="text-white px-3 py-2 rounded-md"
            >
              Add To Cart
            </Button>
          )}
        </div>
      )}
      <Divider className="mx-auto mt-2" />
      <DescriptionSection />
      <Divider className="mx-auto mt-7" />
      <CustomerReviewsSection />
      <Divider className="mx-auto mt-7" />
      <ReviewSection />
    </div>
  );
};
