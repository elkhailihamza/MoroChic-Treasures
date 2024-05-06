import { ReactNode } from "react";

interface ModalProps {
  header?: string;
  children?: ReactNode;
  open: boolean;
  modalFunction: (value: boolean) => void;
}

export const Modal = ({
  header,
  children,
  open,
  modalFunction,
}: ModalProps) => {
  return (
    <div
      onClick={() => {
        modalFunction(false);
      }}
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        open ? "" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed flex justify-center items-center top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)]`}
    >
      <div
        className="relative p-4 w-full max-w-2xl max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-white rounded-lg border-2 border-slate-400 shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b border-slate-400 rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">{header}</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={() => {
                modalFunction(false);
              }}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
