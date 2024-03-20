import Button from "../../components/Button";
import Input from "../../components/Input";
import Header from "../../components/Header";
import Logo from "../../components/Logo";

const Register = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <div className="h-4/5 w-4/5">
          <div className="flex justify-center">
            <Logo height={150} width={150} />
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
                  required
                  className="p-2 border-2 border-slate-950 bg-[#FEFAE0] focus:rounded-none"
                />
                <div className="flex justify-between gap-2">
                  <Input
                    placeholder="Password"
                    name="password"
                    type="password"
                    required
                    className="p-2 border-2 border-slate-950 bg-[#FEFAE0] focus:rounded-none"
                  />
                  <Input
                    placeholder="Confirm"
                    name="confirm_password"
                    type="password"
                    required
                    className="p-2 border-2 border-slate-950 bg-[#FEFAE0] focus:rounded-none"
                  />
                </div>
              </div>
              <div className="grid mt-5">
                <span>
                  Already have an account?{" "}
                  <a href="/login" className="text-[#BC6C25] hover:underline">
                    Sign-up
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

export default Register;