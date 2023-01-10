import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import AdminButton from "../../../Components/adminButton";
import AdminContainer from "../../../Components/adminContainer";
import AdminHeader from "../../../Components/adminHeader";
import AdminTitle from "../../../Components/adminTitle";
import { ReSellCheckBox } from "../../../Components/resellCheckBox";
import { TextInput } from "../../../Components/textInput";

function CategoryEdit() {
  const router = useRouter();
  const id = router.query.id;

  const name = useRef(null);
  const price = useRef(null);
  const category = useRef(null);
  const department = useRef(null);
  const description = useRef(null);
  const color = useRef(null);
  const material = useRef(null);
  const size = useRef(null);

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
            value="Цамц"
          />
          <TextInput
            innserRef={price}
            id="price"
            title="Price *"
            name="price"
            value="739000"
            type="number"
          />
          {/* {categories?.map((data, index) => ( */}
          {/* <ReSellCheckBox title={data.name} key={index} age={"row1"} /> */}
          {/* ))} */}
          {/* {department?.map((el, index) => (
            <ReSellCheckBox title={el.name} key={index} age={"row2"} />
          ))} */}
          <TextInput
            innserRef={description}
            id="description"
            title="Description *"
            name="description"
            value="100 хувь ноолуур"
          />
          <TextInput
            innserRef={color}
            id="color"
            title="Color *"
            name="color"
            value="Хар"
          />
          <TextInput
            innserRef={material}
            id="material"
            title="Material *"
            name="material"
            value="ноолуур"
          />
          <TextInput
            innserRef={size}
            id="size"
            title="Size *"
            name="size"
            value="M"
          />
        </div>
        <div className="flex gap-6 justify-end pb-8">
          <AdminButton type="delete" />
          <AdminButton type="save" />
        </div>
      </AdminContainer>
    </>
  );
}

export default CategoryEdit;
