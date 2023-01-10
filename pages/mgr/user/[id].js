import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import AdminButton from "../../../Components/adminButton";
import AdminContainer from "../../../Components/adminContainer";
import AdminHeader from "../../../Components/adminHeader";
import AdminTitle from "../../../Components/adminTitle";
import { TextInput } from "../../../Components/textInput";

function UserEdit() {
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
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
            value="Temuujin"
          />
          <TextInput
            id="lastName"
            title="last name"
            name="lastName"
            value="Juldas"
          />
          <TextInput id="email" title="Email" name="email" value="Juldas" />
          <TextInput
            id="createdAt"
            title="Created at"
            name="createdAt"
            value="2023-01-08"
          />
        </div>
      </AdminContainer>
    </>
  );
}

export default UserEdit;
