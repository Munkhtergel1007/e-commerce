import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { forwardRef, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Button from "../../Components/button";
import { Footer } from "../../Components/footer";
import Header from "../../Components/header";
import { TextInput } from "../../Components/textInput";
import requireValueNow from "../../utils/requireValueNow";
// import useGetUser from "../../hooks/useGetUser";
import Cookies from "universal-cookie";
import jwt from "jwt-decode";
import { fetGetUser } from "../../api/user";
import API from "../../api";

export default function Login() {
  const router = useRouter();
  const account = router.query.account;

  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginEmail = useRef(null);
  const loginPassword = useRef(null);
  const registerEmail = useRef(null);
  const registerPassword = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);

  const cookies = new Cookies();

  const doSubmit = async () => {
    let object = {};

    if (account === "login") {
      if (requireValueNow(loginEmail, "email")) {
        return;
      }
      if (requireValueNow(loginPassword)) {
        return;
      }

      object = {
        email: loginEmail.current.value,
        password: loginPassword.current.value,
      };
    } else {
      if (requireValueNow(firstName)) {
        return;
      }
      if (requireValueNow(lastName)) {
        return;
      }
      if (requireValueNow(registerEmail, "email")) {
        return;
      }
      if (requireValueNow(registerPassword)) {
        return;
      }

      object = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: registerEmail.current.value,
        password: registerPassword.current.value,
      };
    }

    setLoading(true);

    await API.post(account === "register" ? "/register" : "/login", object)
      .then((result) => {
        console.log(result);

        if (!result.data.success) {
          toast.error("Алдаа гарлаа.");
          return;
        }
        setToken(result.data.token);
      })
      .catch((err) => {
        console.log(err.message);
      });

    const decode = jwt(token);

    cookies.set("jwt_authorization", token, {
      expires: new Date(decode.exp * 1000),
    });
  };

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
                <TextInput
                  innserRef={loginEmail}
                  id="emailInput"
                  title="Email"
                  name="и-майл"
                />
              </div>
              <div>
                <TextInput
                  innserRef={loginPassword}
                  id="password"
                  title="Password"
                  name="нууц үг"
                />
              </div>
              <div className="w-full">
                <div className="mb-4 w-full">
                  <Button
                    title="Sign in"
                    className="login-button"
                    onclick={doSubmit}
                    href="#"
                  />
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
                <TextInput
                  innserRef={firstName}
                  id="firstNameInput"
                  title="First name"
                  name="нэр"
                />
              </div>
              <div>
                <TextInput
                  innserRef={lastName}
                  id="lastNameInput"
                  title="Last name"
                  name="эцэг/эхийн нэр"
                />
              </div>
              <div>
                <TextInput
                  innserRef={registerEmail}
                  id="emailInput"
                  title="Email"
                  name="и-майл"
                />
              </div>
              <div>
                <TextInput
                  innserRef={registerPassword}
                  id="password"
                  title="Password"
                  name="нууц үг"
                />
              </div>
              <div className="w-full">
                <div className="mb-4 w-full">
                  <Button
                    href="#"
                    title="Create"
                    className="login-button"
                    onclick={doSubmit}
                  />
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
