import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../Components/button";
import { Footer } from "../../Components/footer";
import Header from "../../Components/header";
import { TextInput } from "../../Components/textInput";

export default function Login() {
  const router = useRouter();
  const account = router.query.account;

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Header className="shadow-sm" noExtraNav />
      <main className="mt-0 md:mt-[70px]">
        <div className="py-10 px-4 md:py-[75px] md:px-10">
          {account === "login" ? (
            <>
              <div className="mb-7 md:mb-[50px]">
                <h1 className="text-[26.35px] md:text-[31px] font-bold leading-[1] text-center">
                  Login
                </h1>
              </div>
              <div>
                <TextInput id="emailInput" title="Email" />
              </div>
              <div>
                <TextInput id="password" title="Password" />
              </div>
              <div className="w-full">
                <div className="mb-4 w-full">
                  <Button title="Sign in" className="login-button" />
                </div>
                <Link href="/account/register">
                  <a className="text-[#252d3a] cursor-pointer text-center font-medium text-[13.6px] md:text-[16px] leading-[1.6] tracking-[.025em] block">
                    Create an account
                  </a>
                </Link>
              </div>
            </>
          ) : account === "register" ? (
            <>
              <div className="mb-7 md:mb-[50px]">
                <h1 className="text-[26.35px] md:text-[31px] font-bold leading-[1] text-center">
                  Create Account
                </h1>
              </div>
              <div>
                <TextInput id="firstNameInput" title="First name" />
              </div>
              <div>
                <TextInput id="lastNameInput" title="Last name" />
              </div>
              <div>
                <TextInput id="emailInput" title="Email" />
              </div>
              <div>
                <TextInput id="password" title="Password" />
              </div>
              <div className="w-full">
                <div className="mb-4 w-full">
                  <Button title="Create" className="login-button" />
                </div>
                <Link href="/account/login">
                  <a className="text-[#252d3a] cursor-pointer text-center font-medium text-[13.6px] md:text-[16px] leading-[1.6] tracking-[.025em] block">
                    Sign in
                  </a>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div></div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
