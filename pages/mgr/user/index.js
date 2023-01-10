import Head from "next/head";
import AdminButton from "../../../Components/adminButton";
import AdminContainer from "../../../Components/adminContainer";
import AdminHeader from "../../../Components/adminHeader";
import AdminList from "../../../Components/adminList";
import AdminTitle from "../../../Components/adminTitle";

function UserList() {
  return (
    <>
      <Head>
        <title>User manage</title>
      </Head>
      <AdminHeader />
      <AdminContainer>
        <AdminTitle title="User list" />
        <div className="w-full bg-[rgba(0,0,0,.1)] p-2 border-b rounded-t-md">
          Email
        </div>
        <AdminList title="Women" href="/mgr/user/{id}" />
      </AdminContainer>
    </>
  );
}

export default UserList;
