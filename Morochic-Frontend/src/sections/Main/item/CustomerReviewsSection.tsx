import { CustomerReviewsBar } from "../../../components/CustomerReviewsBar";

export const CustomerReviewsSection = () => {
  return (
    <div className="p-10">
        <div className="flex justify-between items-center">
          <h1 className="underline text-2xl font-medium">Customer reviews:</h1>
          <h2 className="text-xl font-medium">
            <span className="text-[#BC6C25]">45 </span>positive reviews
          </h2>
        </div>
        <div className="p-20">
          <CustomerReviewsBar />
        </div>
      </div>
  )
}
