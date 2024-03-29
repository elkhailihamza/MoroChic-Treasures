import Button from "./Button";
import Input from "./Input";

export const SubscribeToNewsletter = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5" />
          <path d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.4-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.8 1.1z" />
        </svg>
        <span className="text-white">Subscribe To Our Newsletter</span>
      </div>
      <div className="mt-1">
        <Input
          type="email"
          name="newsletter"
          className="rounded py-1"
          placeholder="Email.."
        ></Input>
      </div>
      <div className="flex justify-center mt-2">
        <Button
          color="#283618"
          base={false}
          className="px-5 py-1 rounded-lg text-white"
        >
          Subscribe
        </Button>
      </div>
    </>
  );
};
