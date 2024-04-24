import { Link } from "react-router-dom";

import Button from "../../components/Button";
import { Input } from "../../components/Input";
import Logo from "../../components/NavbarLogo";
import { ChangeEvent, FormEvent, useState } from "react";
import { SpinnerCircular } from "spinners-react";
import { useAuth } from "../../contexts/AuthContext";

export const Login = () => {
  const { login, errors } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await login(data.email, data.password);
    setIsLoading(false);
  };
  return (
    <>
      <section className="flex flex-col items-center justify-center mt-20">
        <div className="h-4/5 w-4/5">
          <div className="flex justify-center mb-10">
            <Logo width={150} />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex justify-center">
              <h1 className="text-[28px] mb-5">Welcome Back!</h1>
            </div>
            <form onSubmit={handleSubmit} className="sm:w-[400px] w-full">
              {errors && errors.message ? (
                <div className="bg-red-600 p-2 w-full">
                  <span className="text-white text-sm"><span className="font-bold">{errors.message}!</span> {errors.details}</span>
                </div>
              ) : (
                ``
              )}
              <div className="flex flex-col align-center justify-center gap-5 mt-2">
                <div className="flex flex-col w-full">
                  <Input
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    autoComplete="username"
                    className="p-2 border-2 border-slate-950 bg-[#FEFAE0] focus:rounded-none"
                  />
                  {errors && errors.email ? (
                    <span className="bg-red-600 text-white px-2 py-1 text-sm">
                      {errors.email}
                    </span>
                  ) : (
                    ``
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <Input
                    placeholder="Password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    disabled={isLoading}
                    autoComplete="current-password"
                    className="p-2 border-2 border-slate-950 bg-[#FEFAE0] focus:rounded-none"
                  />
                  {errors && errors.password ? (
                    <span className="bg-red-600 text-white px-2 py-1 text-sm">
                      {errors.password}
                    </span>
                  ) : (
                    ``
                  )}
                </div>
              </div>
              <div className="grid mt-5">
                <span>
                  Don't have an account?{" "}
                  <Link
                    to={"/auth/register"}
                    className="text-[#BC6C25] hover:underline"
                  >
                    sign up
                  </Link>{" "}
                  now!
                </span>
                <span>
                  <a href="" className="text-[#BC6C25] hover:underline">
                    Forgot Password?
                  </a>
                </span>
              </div>
              <div className="text-center mt-10">
                {isLoading ? (
                  <div className="flex justify-center items-center">
                    <SpinnerCircular color="#BC6C25" />
                  </div>
                ) : (
                  <Button
                    type="submit"
                    className="px-[26px] py-[6px] text-[18px] bg-[#BC6C25] rounded-sm text-white"
                    base={false}
                  >
                    Sign-in
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
