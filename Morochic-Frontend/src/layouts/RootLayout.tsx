import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <div className="root-layout">
        <main className="lg:text-[20px] md:text-[16px] text-[13px]">
          <Outlet />
        </main>
      </div>
    </>
  );
};