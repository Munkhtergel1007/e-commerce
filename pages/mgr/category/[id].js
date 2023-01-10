import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import AdminButton from "../../../Components/adminButton";
import AdminContainer from "../../../Components/adminContainer";
import AdminHeader from "../../../Components/adminHeader";
import AdminTitle from "../../../Components/adminTitle";
import { TextInput } from "../../../Components/textInput";

function CategoryEdit() {
  const router = useRouter();
  const id = router.query.id;

  const name = useRef(null);

  return (
    <>
      <Head>
        <title>Category edit</title>
      </Head>
      <AdminHeader />
      <AdminContainer>
        <AdminTitle title="Category edit" />
        <div>
          <TextInput
            innserRef={name}
            id="name"
            title="Name *"
            name="name"
            value="Women"
          />
        </div>
        <div className="flex gap-6 justify-end">
          <AdminButton type="delete" />
          <AdminButton type="save" />
        </div>
      </AdminContainer>
    </>
  );
}

export default CategoryEdit;
