import Button from "./components/Button";
import Input from "./components/Input";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen">
        <div className="h-4/5 w-4/5">
          <div className="flex justify-center">
            <Logo height={150} width={150} />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex justify-center">
              <Header className="text-[28px] mb-5" header="LOGIN" />
            </div>
            <Alert>Warning!</Alert>
            <form className="sm:w-[400px] w-fit" method="post" action="">
              <div className="flex flex-col align-center justify-center gap-5">
                <Input
                  placeholder="Email"
                  name="email"
                  className="p-2 border-2 border-slate-950 bg-[#FEFAE0] focus:rounded-none"
                />
                <Input
                  placeholder="Password"
                  name="password"
                  className="p-2 border-2 border-slate-950 bg-[#FEFAE0] focus:rounded-none"
                />
              </div>
              <div className="grid mt-5">
                <span>
                  Don't have an account?{" "}
                  <a href="" className="text-[#BC6C25] hover:underline">
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
                  onClick={() => console.log('clicked')}
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
}

export default App;
