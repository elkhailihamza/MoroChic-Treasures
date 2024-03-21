import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Header from "../../components/Header";
import Logo from "../../components/Logo";

const Register = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center mt-10">
        <div className="h-4/5 w-4/5">
          <div className="flex justify-center mb-10">
            <Logo width={150} />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex justify-center">
              <Header className="text-[28px] mb-5">Register</Header>
            </div>
            <form className="sm:w-[400px] w-full" method="post" action="">
              <div className="flex flex-col align-center justify-center gap-5">
                <div className="flex justify-between gap-2">
                  <Input
                    placeholder="First Name"
                    name="email"
                    type="text"
                    required
                    className="p-2 border-2 border-slate-950 bg-[#FEFAE0] focus:rounded-none"
                  />
                  <Input
                    placeholder="Last Name"
                    name="email"
                    type="text"
                    required
                    className="p-2 border-2 border-slate-950 bg-[#FEFAE0] focus:rounded-none"
                  />
                </div>
                <Input
                  placeholder="Email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  required
                  className="p-2 border-2 border-slate-950 bg-[#FEFAE0] focus:rounded-none"
                />
                <div className="flex justify-between gap-2">
                  <Input
                    placeholder="Password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="p-2 border-2 border-slate-950 bg-[#FEFAE0] focus:rounded-none"
                  />
                  <Input
                    placeholder="Confirm"
                    name="confirm_password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="p-2 border-2 border-slate-950 bg-[#FEFAE0] focus:rounded-none"
                  />
                </div>
              </div>
              <div className="grid mt-5">
                <span>
                  Already have an account?{" "}
                  <Link
                    to={"/auth/login"}
                    className="text-[#BC6C25] hover:underline"
                  >
                    Sign-up
                  </Link>
                </span>
              </div>
              <div className="flex justify-center mt-10">
                <Button
                  type="submit"
                  className="px-[24px] py-[8px] text-[18px] rounded-sm text-white"
                >
                  Sign-up
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
