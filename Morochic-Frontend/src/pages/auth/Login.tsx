import Button from "../../components/Button";
import Input from "../../components/Input";
import Header from "../../components/Header";
import Logo from "../../components/Logo";

const Login = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen">
        <div className="h-4/5 w-4/5">
          <div className="flex justify-center">
            <Logo height={150} width={150} />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex justify-center">
              <Header className="text-[28px] mb-5">LOGIN</Header>
            </div>
            <form className="sm:w-[400px] w-full" method="post" action="">
              <div className="flex flex-col align-center justify-center gap-5">
                <Input
                  placeholder="Email"
                  name="email"
                  type="email"
                  className="p-2 border-2 border-slate-950 bg-[#FEFAE0] focus:rounded-none"
                />
                <Input
                  placeholder="Password"
                  name="password"
                  type="password"
                  className="p-2 border-2 border-slate-950 bg-[#FEFAE0] focus:rounded-none"
                />
              </div>
              <div className="grid mt-5">
                <span>
                  Don't have an account?{" "}
                  <a href="/register" className="text-[#BC6C25] hover:underline">
                    sign up now!
                  </a>
                </span>
                <span>
                  <a href="" className="text-[#BC6C25] hover:underline">
                    Forgot Password?
                  </a>
                </span>
              </div>
              <div className="flex justify-center mt-5">
                <Button
                  type="submit"
                  className="px-6 py-2 text-[18px] text-white"
                >
                  Sign-in
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
