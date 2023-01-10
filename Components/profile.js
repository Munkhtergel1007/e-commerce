import Cookies from "js-cookie";
import Head from "next/head";
import React from "react";
import Button from "./button";
import { Footer } from "./footer";
import Header from "./header";
import { Loading } from "./Loading";

export const Profile = ({loading, user}) => {
	const logOutClick = () => {
    Cookies.remove('token');
    window.localStorage.removeItem("token");
	};
	return (
		<> 
      {loading ? <Loading /> : null}
			<Head>
				<title>{user?.lastName?.[0].toUpperCase() + "." + user?.firstName + " " + "info"}</title>
			</Head>
      <Header className="shadow-sm" noExtraNav />
      <main className="mt-0 md:mt-[70px]">
				<div className="py-10 px-4 md:py-[75px] md:px-10">
					<>
			      <Button onclick={logOutClick} title="LogOut"/>
					</>
				</div>
			</main>
			<Footer />
		</>
	);
};
