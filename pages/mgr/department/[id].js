import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import API from "../../../api";
import AdminButton from "../../../Components/adminButton";
import AdminContainer from "../../../Components/adminContainer";
import AdminHeader from "../../../Components/adminHeader";
import AdminTitle from "../../../Components/adminTitle";
import { Loading } from "../../../Components/Loading";
import { TextInput } from "../../../Components/textInput";
import useGetOneDepartment from "../../../hooks/useOneDepartment";

function DepartmentEdit() {
	const router = useRouter();
	const id = router.query.id;
	const { loading, data: department, updateId } = useGetOneDepartment();
	const name = useRef(null);

	useEffect(() => {
		updateId(id);
	}, [id]);

	const formSendHandler = (type) => {
		if (type === "save") {
			API.post("/updateDepartment", {
				name: name.current.value,
				_id: id,
			}).then((result) => {
				if (result.status === 200) {
					alert("Successfully saved");
					window.location.href = "/mgr/department";
				}
			});
		} else {
			API.post("/deleteDepartment", {
				_id: id,
			}).then((result) => {
				if (result.status === 200) {
					alert("Successfully deleted");
					window.location.href = "/mgr/department";
				}
			});
		}
	};

	return (
		<>
			{loading ? <Loading /> : null}
			<Head>
				<title>Department edit</title>
			</Head>
			<AdminHeader />
			<AdminContainer>
				<AdminTitle title="Department edit" />
				<div>
					<TextInput
						innserRef={name}
						id="name"
						title="Name *"
						name="name"
						value={department?.name}
					/>
				</div>
				<div className="flex gap-6 justify-end">
					<AdminButton
						type="delete"
						onclick={() => formSendHandler("delete")}
					/>
					<AdminButton type="save" onclick={() => formSendHandler("save")} />
				</div>
			</AdminContainer>
		</>
	);
}

export default DepartmentEdit;
