import { useState } from "react";
import { useProduct } from "../../contexts/ProductContext";
import Button from "../../components/Button";
import { SecondStep } from "../../sections/Vendor/productTemplate/SecondStep";
import { ThirdStep } from "../../sections/Vendor/productTemplate/ThirdStep";
import { SpinnerCircular } from "spinners-react";
import { FirstStep } from "../../sections/Vendor/productTemplate/FirstStep";
import { FourthStep } from "../../sections/Vendor/productTemplate/FourthStep";

export const ProductTemplate = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const { handleProductSubmit } = useProduct();

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const goForward = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const steps = [
    <FirstStep key={1} />,
    <SecondStep key={2} />,
    <ThirdStep key={3} />,
    <FourthStep key={4} />,
  ];

  return (
    <div className="md:px-20 px-7 py-10">
      {currentStep > 1 && (
        <div
          onClick={async () => {
            setIsLoading(true);
            await goBack();
            setIsLoading(false);
          }}
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
      )}
      <form
        onSubmit={async (e) => {
          setIsLoading(true);
          await handleProductSubmit(e);
          setIsLoading(false);
        }}
        className="mt-10"
        encType="multipart/form-data"
      >
        <>
          {steps.map((step) => {
            return step.key === currentStep.toString() && step;
          })}
          <div className="text-center mt-10">
            {isLoading ? (
              <div className="flex justify-center">
                <SpinnerCircular size={40} color="#000000" />
              </div>
            ) : currentStep === 4 ? (
              <Button
                type="submit"
                className="text-white py-2 px-4 rounded"
                base={false}
                color="#000000"
              >
                Submit
              </Button>
            ) : (
              <Button
                onClick={async () => {
                  setIsLoading(true);
                  await goForward();
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
      </form>
    </div>
  );
};
