import Head from "next/head";
import AdminButton from "../../../Components/adminButton";
import AdminContainer from "../../../Components/adminContainer";
import AdminHeader from "../../../Components/adminHeader";
import AdminList from "../../../Components/adminList";
import AdminTitle from "../../../Components/adminTitle";

function CategoryList() {
  return (
    <>
      <Head>
        <title>Category manage</title>
      </Head>
      <AdminHeader />
      <AdminContainer>
        <AdminTitle title="Category list" />
        <div className="w-full bg-[rgba(0,0,0,.1)] p-2 border-b rounded-t-md">
          Name
        </div>
        <AdminList title="Women" href="/mgr/category/{id}" />
        <div className="flex justify-end mt-8">
          <AdminButton type="create" href="/mgr/category/create" />
        </div>
      </AdminContainer>
    </>
  );
}

export default CategoryList;
