import Head from "next/head";
import Link from "next/link";
import Button from "./button";
import { Footer } from "./footer";
import Header from "./header";
import { TextInput } from "./textInput";

export default function Register({ firstName, lastName, registerEmail, registerPassword, doSubmit }) {
	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<Header className="shadow-sm" noExtraNav />
			<main className="mt-0 md:mt-[70px]">
				<div className="py-10 px-4 md:py-[75px] md:px-10">
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
				</div>
			</main>
			<Footer />
		</>
	);
}
