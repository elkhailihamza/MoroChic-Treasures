import { Link } from "react-router-dom";
import { LOGIN, REGISTER } from "../../App";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useUser } from "../../contexts/UserContext";
import { SpinnerCircular } from "spinners-react";

export const ShoppingCart = () => {
  const { currentUser } = useAuth();
  const { fetchMe } = useUser();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  
  return (
    <div className="max-w-8xl p-40">
      <div className="flex justify-center items-center p-10">
        {isLoading ? (
          <SpinnerCircular color="#000000" />
        ) : currentUser && Object.keys(currentUser).length > 0 ? (
          <>hello</>
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
