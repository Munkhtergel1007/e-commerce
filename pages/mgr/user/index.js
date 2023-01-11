import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import API from "../../../api";
import AdminContainer from "../../../Components/adminContainer";
import AdminHeader from "../../../Components/adminHeader";
import AdminList from "../../../Components/adminList";
import AdminTitle from "../../../Components/adminTitle";
import { Loading } from "../../../Components/Loading";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    API.get("/getAllUsers")
      .then((result) => {
        if (result.status === 200) {
          setLoading(false);
          setUsers(result.data.data);
        }
      })
      .catch((el) => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? <Loading /> : null}
      <Head>
        <title>User manage</title>
      </Head>
      <AdminHeader />
      <AdminContainer>
        <AdminTitle title="User list" />
        <div className="w-full bg-[rgba(0,0,0,.1)] p-2 border-b rounded-t-md">
          Email
        </div>
        {users.map((el, index) => (
          <div className="w-full bg-white p-2 border-b">
            <Link href={"/mgr/user/" + el?._id}>{el?.email}</Link>
          </div>
        ))}
      </AdminContainer>
    </>
  );
}

export default UserList;
