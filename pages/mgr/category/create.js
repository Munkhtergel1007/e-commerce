import Head from "next/head";
import { useRef } from "react";
import AdminButton from "../../../Components/adminButton";
import AdminContainer from "../../../Components/adminContainer";
import AdminHeader from "../../../Components/adminHeader";
import AdminTitle from "../../../Components/adminTitle";
import { TextInput } from "../../../Components/textInput";
import requireValueNow from "../../../utils/requireValueNow";

function CategoryCreate() {
  const name = useRef(null);

  const createCategory = () => {
    if (requireValueNow(name)) {
      return;
    }

    // -------------------------- api --------------------------
  };

  return (
    <>
      <Head>
        <title>Category create</title>
      </Head>
      <AdminHeader />
      <AdminContainer>
        <AdminTitle title="Category create" />
        <div>
          <TextInput
            innserRef={name}
            id="name"
            title="Name *"
            name="name"
            value=""
          />
        </div>
        <div className="flex justify-end">
          <AdminButton type="save" onclick={createCategory} />
        </div>
      </AdminContainer>
    </>
  );
}

export default CategoryCreate;
