import Cookies from "js-cookie";
import Head from "next/head";
import React from "react";
import AdminBox from "./adminBox";
import AdminContainer from "./adminContainer";
import AdminTitle from "./adminTitle";
import Button from "./button";
import { Footer } from "./footer";
import Header from "./header";
import { Loading } from "./Loading";
import { TextInput } from "./textInput";

export const Profile = ({ loading, user }) => {
	const logOutClick = () => {
		Cookies.remove("token");
		window.localStorage.removeItem("token");
		window.location.href = "/";
	};
	return (
		<>
			{loading ? <Loading /> : null}
			<Head>
				<title>
					{user?.lastName?.[0].toUpperCase() +
						"." +
						user?.firstName +
						" " +
						"info"}
				</title>
			</Head>
			<Header className="shadow-sm" noExtraNav />
			<main className="mt-0 md:mt-[70px]">
				<div className="py-10 px-4 md:py-[75px] md:px-10">
					<AdminContainer>
						<AdminTitle title="User Info" />
						<div>
							<TextInput
								id="firstName"
								title="first name"
								name="firstName"
								value={user?.firstName}
								disabled={true}
							/>
							<TextInput
								id="lastName"
								title="last name"
								name="lastName"
								value={user?.lastName}
								disabled={true}
							/>
							<TextInput
								id="email"
								title="Email"
								name="email"
								value={user?.email}
								disabled={true}
							/>
							<TextInput
								id="createdAt"
								title="Created at"
								name="createdAt"
								value={user?.createdAt?.split("T")?.[0]}
								disabled={true}
							/>
							<TextInput
								value="LOG OUT"
								type="button"
								onClick={() => logOutClick()}
							/>
						</div>
					</AdminContainer>
				</div>
			</main>
			<Footer />
		</>
	);
};
