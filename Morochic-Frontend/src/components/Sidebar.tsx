import { ReactNode } from "react";

interface sidebarProps {
  backdrop?: boolean;
  id: string;
  close?: string;
  header?: string;
  children?: ReactNode;
}

const Sidebar = ({
  backdrop = false,
  id,
  close = id,
  header = "Header",
  children,
}: sidebarProps) => {
  return (
    <>
      <div
        id={id}
        className="fixed select-none right-0 top-[65px] z-40 w-72 h-screen overflow-y-auto transition-transform translate-x-full max-w-[20rem] flex-col bg-white bg-clip-border p-4 text-gray-700 shadow-md shadow-blue-gray-900/5"
        data-drawer-backdrop={backdrop}
        data-drawer-hide={close}
        tabIndex={-1}
      >
        <div className="p-4 mb-2 flex items-center justify-center">
          <h5 className="block font-sans text-xl antialiased font-semibold tracking-normal text-blue-gray-900">
            {header}
          </h5>
          <button
            type="button"
            data-drawer-hide={close}
            className="text-gray-400 bg-transparent transition-all hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          {children}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
