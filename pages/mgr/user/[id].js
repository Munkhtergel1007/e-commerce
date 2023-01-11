import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import AdminButton from "../../../Components/adminButton";
import AdminContainer from "../../../Components/adminContainer";
import AdminHeader from "../../../Components/adminHeader";
import AdminTitle from "../../../Components/adminTitle";
import { Loading } from "../../../Components/Loading";
import { TextInput } from "../../../Components/textInput";
import useGetOneUser from "../../../hooks/useGetOneUser";

function UserEdit() {
  const router = useRouter();
  const id = router.query.id;

  const { loading, user, updateId } = useGetOneUser();

  useEffect(() => {
    updateId(id);
  }, [id]);

  return (
    <>
      {loading ? <Loading /> : null}
      <Head>
        <title>User detail</title>
      </Head>
      <AdminHeader />
      <AdminContainer>
        <AdminTitle title="User edit" />
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
        </div>
      </AdminContainer>
    </>
  );
}

export default UserEdit;
