import { Link } from "react-router-dom";

import Button from "../../components/Button";
import { Input } from "../../components/Input";
import Logo from "../../components/NavbarLogo";
import { ChangeEvent, FormEvent, useState } from "react";
import { SpinnerCircular } from "spinners-react";
import axiosClient from "../../axios";
import { useAuth } from "../../contexts/AuthContext";

type formData = {
  username?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
};

const Register = () => {
  const { login, errors, setErrors } = useAuth();
  const [data, setData] = useState<formData>({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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
    try {
      await axiosClient.post("/register", data);
      if (data.email && data.password) {
        await login(data.email, data.password);
      }
    } catch (error: any) {
      setErrors(error?.response?.data?.errors ?? {});
    }
    setIsLoading(false);
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center mt-10">
        <div className="h-4/5 w-4/5">
          <div className="flex justify-center mb-10">
            <Logo width={150} />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex justify-center">
              <h1 className="text-[28px] mb-5">Register</h1>
            </div>
            <form onSubmit={handleSubmit} className="sm:w-[400px] w-full">
              {errors && errors.message ? (
                <div className="bg-red-600 p-2 w-full">
                  <span className="text-white text-sm">
                    <span className="font-bold">{errors.message}!</span>{" "}
                    {errors.details}
                  </span>
                </div>
              ) : (
                ``
              )}
              <div className="flex flex-col align-center justify-center gap-5">
                <div className="grid w-full">
                  <Input
                    placeholder="Username"
                    name="username"
                    type="text"
                    onChange={handleChange}
                    value={data.username}
                    className="p-2 border-2 border-slate-950 bg-[#FEFAE0] focus:rounded-none"
                  />
                  {errors && errors.username ? (
                    <span className="bg-red-600 text-white px-2 py-1 text-sm">
                      {errors.username}
                    </span>
                  ) : (
                    ``
                  )}
                </div>
                <div className="grid w-full">
                  <Input
                    placeholder="Email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={data.email}
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
                <div className="grid w-full">
                  <div className="flex justify-between gap-2">
                    <Input
                      placeholder="Password"
                      name="password"
                      type="password"
                      onChange={handleChange}
                      autoComplete="new-password"
                      className="p-2 border-2 border-slate-950 bg-[#FEFAE0] focus:rounded-none"
                    />
                    <Input
                      placeholder="Confirm"
                      name="password_confirmation"
                      type="password"
                      value={data["password_confirmation"]}
                      onChange={handleChange}
                      autoComplete="new-password"
                      className="p-2 border-2 border-slate-950 bg-[#FEFAE0] focus:rounded-none"
                    />
                  </div>
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
                  Already have an account?{" "}
                  <Link
                    to={"/auth/login"}
                    className="text-[#BC6C25] hover:underline"
                  >
                    sign-in
                  </Link>
                  .
                </span>
              </div>
              <div className="flex justify-center mt-10">
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
                    Sign-up
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

export default Register;
