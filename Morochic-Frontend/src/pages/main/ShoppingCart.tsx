import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGIN, REGISTER } from "../../App";
import { useAuth } from "../../contexts/AuthContext";
import { SpinnerCircular } from "spinners-react";
import { useProduct } from "../../contexts/ProductContext";
import Button from "../../components/Button";
import axiosClient from "../../axios";

export const ShoppingCart = () => {
  const { isLoggedIn } = useAuth();
  const {
    cartItems,
    incrementQuantity,
    decrementQuantity,
    getCartItems,
    calculateTotalPrice,
    totalPrice,
  } = useProduct();

  const handleIncrement = (id: string | undefined) => {
    if (id !== undefined) {
      incrementQuantity(id);
      cartItems && calculateTotalPrice(cartItems);
    }
  };

  const handleDecrement = (id: string | undefined) => {
    if (id !== undefined) {
      decrementQuantity(id);
      cartItems && calculateTotalPrice(cartItems);
    }
  };

  const handleOrderSubmit = async () => {
    try {
      const response = await axiosClient.post("/order/submit", {
        cartItems: cartItems, totalPrice: totalPrice
      });
        window.location.href = response.data.redirect_url as string;
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const fetchInfo = async () => {
      await getCartItems();
    };

    fetchInfo();
  }, []);

  useEffect(() => {
    if (cartItems) {
      calculateTotalPrice(cartItems);
    }
  }, [cartItems]);

  return (
    <div className="max-w-8xl p-20">
      <div className="flex justify-center items-center">
        {cartItems && cartItems.length > 0 ? (
          <div className="flex flex-col w-full px-10">
            <div>
              <h1 className="text-3xl font-medium">Cart:</h1>
            </div>
            <div className="w-full flex flex-col justify-between px-5 mt-10">
              <div className="flex flex-col py-5">
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex justify-between px-2 py-2 border-b-2 border-slate-700">
                    <h1>Items:</h1>
                    <span>{cartItems.length}</span>
                  </div>
                  {cartItems.map((item, key) => (
                    <div
                      key={key}
                      className="w-full flex border hover:bg-gray-100 justify-between transition-all cursor-pointer px-2 py-4 rounded-sm"
                    >
                      <div className="flex w-full">
                        <span className="border-r-2 border-slate-700 px-2">
                          {key + 1}
                        </span>
                        <div className="ms-5 flex justify-between w-full">
                          <div className="flex flex-col">
                            <span className="font-semibold text-md">
                              {item.title}
                            </span>
                            <span className="text-sm">{item["mini-body"]}</span>
                            <span className="mt-3">
                              <span className="text-[#BC6C25]">$</span>
                              {item.price}
                            </span>
                          </div>
                          <div className="text-center">
                            <span>Quantity: {item.quantity}</span>{" "}
                            <div className="flex gap-5 mt-5">
                              <Button
                                className="hover:bg-gray-300 rounded-md transition-all p-2"
                                base={false}
                                transparent={true}
                                onClick={() =>
                                  handleIncrement(item.id?.toString())
                                }
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
                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                              </Button>
                              <Button
                                className="hover:bg-gray-300 rounded-md transition-all p-2"
                                base={false}
                                transparent={true}
                                onClick={() =>
                                  handleDecrement(item.id?.toString())
                                }
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
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t grid text-center justify-end py-4 gap-1">
                <span className="text-sm">Total Price:</span>
                <span className="text-center text-sm"><span className="text-[#BC6C25]">$</span>{totalPrice}</span>
                <Button onClick={handleOrderSubmit} className="p-2 rounded-sm text-white" base={false}>
                  Complete Order
                </Button>
              </div>
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
