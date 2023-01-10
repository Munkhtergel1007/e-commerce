import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import requireValueNow from "../../utils/requireValueNow";
import API from "../../api";
import SignIn from "../../Components/login";
import Register from "../../Components/register";
import { Profile } from "../../Components/profile";
import useGetOneUser from "../../hooks/useGetOneUser";
import jwt from "jwt-decode";

export default function Login() {
	const { loading, user, updateId } = useGetOneUser();
	useEffect(() => {
		let token = localStorage.getItem("token");
		if (token) updateId(jwt(token).id);
	}, []);

	const router = useRouter();
	const account = router.query.account;

	const loginEmail = useRef(null);
	const loginPassword = useRef(null);
	const registerEmail = useRef(null);
	const registerPassword = useRef(null);
	const firstName = useRef(null);
	const lastName = useRef(null);

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
		await API.post(account === "register" ? "/register" : "/login", object)
			.then((result) => {
				localStorage.setItem("token", result?.data?.token);
				window.location.href = "/market/all";
			})
			.catch((err) => {});
	};

	return (
		<>
			{account === "login" ? (
				<SignIn
					loginEmail={loginEmail}
					loginPassword={loginPassword}
					doSubmit={doSubmit}
				/>
			) : null}
			{account === "register" ? (
				<Register
					firstName={firstName}
					lastName={lastName}
					registerEmail={registerEmail}
					registerPassword={registerPassword}
					doSubmit={doSubmit}
				/>
			) : null}
			{account === "profile" ? <Profile user={user} loading={loading} /> : null}
		</>
	);
}
