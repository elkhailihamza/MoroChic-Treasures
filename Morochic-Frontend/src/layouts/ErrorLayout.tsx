import { Outlet, Link } from "react-router-dom";
import { HOME } from "../App";

export const ErrorLayout = () => {
  return (
    <div className="error-layout">
      <div className="h-screen flex flex-col select-none justify-center gap-32 items-center">
        <Outlet />
        <Link className="text-blue-600 hover:underline text-md" to={HOME}>
          Go Back Home!
        </Link>
      </div>
    </div>
  );
};
