import { Link } from "react-router-dom";
import { LOGIN, REGISTER } from "../../App";
import { useAuth } from "../../contexts/AuthContext";
import { SpinnerCircular } from "spinners-react";
import { useProduct } from "../../contexts/ProductContext";
import { useEffect, useState } from "react";

export const ShoppingCart = () => {
  const { isLoggedIn } = useAuth();
  const { cartItems, getCartItems } = useProduct();

  const [cartIsLoading, setCartIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCart = async () => {
      setCartIsLoading(true);
      await getCartItems();
      setCartIsLoading(false);
    };

    fetchCart();
  }, []);

  return (
    <div className="max-w-8xl p-20">
      <div className="flex justify-center items-center">
        {cartIsLoading ? (
          <SpinnerCircular size={40} color="#000000" />
        ) : cartItems && cartItems.length > 0 ? (
          <div className="flex flex-col w-full px-10">
            <div>
              <h1 className="text-3xl font-medium">Cart:</h1>
            </div>
            <div className="w-full flex justify-between px-5 mt-10">
              <div className="flex flex-col w-4/6 py-5">
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex justify-between px-1">
                    <h1>Items:</h1>
                    <span>{cartItems.length}</span>
                  </div>
                  {cartItems.map((item, key) => (
                    <div
                      key={key}
                      className="w-full bg-gray-100 hover:bg-gray-200 transition-all cursor-pointer px-2 py-4 rounded-sm"
                    >
                      <span>{item.id}</span>

                    </div>
                  ))}
                </div>
              </div>
              <div className="border"></div>
            </div>
          </div>
        ) : isLoggedIn ? (
          <h1>Add Items to Cart</h1>
        ) : (
          <div>
            <h1 className="text-xl">Your MoroChic Cart Is Empty</h1>
            <div className="flex gap-3 mt-2 items-center">
              <Link
                to={LOGIN}
                className="px-2 py-1 bg-[#283618] shadow text-white hover:bg-[#283618]/85 transition-all"
              >
                Sign-in to an Account.
              </Link>
              <div>OR</div>
              <Link
                to={REGISTER}
                className="px-3 py-1 shadow hover:bg-gray-200 transition-all"
              >
                Make an Account.
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
