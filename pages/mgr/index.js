import Head from "next/head";
import AdminBox from "../../Components/adminBox";
import AdminContainer from "../../Components/adminContainer";
import AdminHeader from "../../Components/adminHeader";

function AdminMain() {
  return (
    <>
      <Head>
        <title>Admin main</title>
      </Head>
      <AdminHeader />
      <AdminContainer>
        <div className="grid grid-cols-2 gap-8">
          <AdminBox href="/mgr/category" title="Category" />
          <AdminBox href="/mgr/product" title="Product" />
          <AdminBox href="/mgr/department" title="Department" />
          <AdminBox href="/mgr/product" title="Category" />
        </div>
      </AdminContainer>
    </>
  );
}

export default AdminMain;
