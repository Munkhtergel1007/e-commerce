import Head from "next/head";
import AdminButton from "../../../Components/adminButton";
import AdminContainer from "../../../Components/adminContainer";
import AdminHeader from "../../../Components/adminHeader";
import AdminList from "../../../Components/adminList";
import AdminTitle from "../../../Components/adminTitle";
import { Loading } from "../../../Components/Loading";
import useGetDepartment from "../../../hooks/useDepartment";

function DepartmentList() {
	const { data: department, loading: depLoading } = useGetDepartment();
	return (
		<>
			{depLoading ? <Loading /> : null}
			<Head>
				<title>Department manage</title>
			</Head>
			<AdminHeader />
			<AdminContainer>
				<AdminTitle title="Department list" />
				<div className="w-full bg-[rgba(0,0,0,.1)] p-2 border-b rounded-t-md">
					Name
				</div>
				{department?.map((el, index) => (
					<AdminList
						title={el.name}
						href={"/mgr/department/" + el?._id}
						key={index}
					/>
				))}
				<div className="flex justify-end mt-8">
					<AdminButton type="create" href="/mgr/department/create" />
				</div>
			</AdminContainer>
		</>
	);
}

export default DepartmentList;
