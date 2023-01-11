import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import AdminButton from "../../../Components/adminButton";
import AdminContainer from "../../../Components/adminContainer";
import AdminHeader from "../../../Components/adminHeader";
import AdminTitle from "../../../Components/adminTitle";
import { Loading } from "../../../Components/Loading";
import { TextInput } from "../../../Components/textInput";
import useGetOneProduct from "../../../hooks/useGetOneProduct";
import Combobox from "react-widgets/Combobox";
import useGetDepartment from "../../../hooks/useDepartment";
import useGetCategories from "../../../hooks/useGetCategory";
import Select from "react-select";
import { Label } from "../../../Components/label";
import API from "../../../api";

function CategoryEdit() {
  const router = useRouter();
  const id = router.query.id;

  const { loading, data: product, updateId } = useGetOneProduct();
  const { loading: depLoading, data: departments } = useGetDepartment();
  const { loading: catLoading, data: categories } = useGetCategories();
  const [selectedDepOption, setSelectedDepOption] = useState({
    value: product?.department?.name,
    label: product?.department?.name,
  });
  const [selectedCatOption, setSelectedCatOption] = useState(null);

  useEffect(() => {
    updateId(id);
  }, []);

  const formSendHandler = (type) => {
    if (type === "save") {
      const data = {
        name: name.current.value,
        price: price.current.value,
        category: selectedCatOption?._id,
        department: selectedDepOption?._id,
        description: description.current.value,
        color: color.current.value,
        material: material.current.value,
        size: size.current.size,
        img: img.current.value,
      };
      API.post("/updateProduct", {
        data: data,
        _id: id,
      }).then((result) => {
        if (result.status === 200) {
          alert("Successfully saved");
          window.location.href = "/mgr/product";
        }
      });
    } else {
      API.post("/deleteProduct", {
        _id: id,
      }).then((result) => {
        if (result.status === 200) {
          alert("Successfully deleted");
          window.location.href = "/mgr/product";
        }
      });
    }
  };

  const name = useRef(null);
  const price = useRef(null);
  const description = useRef(null);
  const color = useRef(null);
  const material = useRef(null);
  const size = useRef(null);
  const img = useRef(null);

  var departmentOptions = [];
  var categoryOptions = [];
  departments?.map((el) => {
    departmentOptions.push({ value: el.name, label: el?.name, _id: el?._id });
  });
  categories?.map((el) => {
    categoryOptions.push({ value: el.name, label: el?.name, _id: el?._id });
  });

  return (
    <>
      {loading || depLoading || catLoading ? <Loading /> : null}
      <Head>
        <title>Product edit</title>
      </Head>
      <Combobox
        defaultValue="Yellow"
        data={["Red", "Yellow", "Blue", "Orange"]}
      />
      <AdminHeader />
      <AdminContainer>
        <AdminTitle title="Category edit" />
        <div>
          <TextInput
            innserRef={name}
            id="name"
            title="Name *"
            name="name"
            value={product?.title}
          />
          <TextInput
            innserRef={price}
            id="price"
            title="Price *"
            name="price"
            value={product?.price}
            type="number"
          />
          <TextInput
            innserRef={img}
            id="img"
            title="Image *"
            name="img"
            value={product?.img}
          />
          <Label id="department" title="Department *" />
          <Select
            defaultValue={setSelectedDepOption}
            onChange={setSelectedDepOption}
            options={departmentOptions}
            className="mb-7 py-2 px-3 text-[1rem] w-full border border-[#e8e8e1] block tracking-[.025em] font-medium"
          />
          <Label id="category" title="Category *" />
          <Select
            defaultValue={selectedCatOption}
            onChange={setSelectedCatOption}
            options={categoryOptions}
            className="mb-7 py-2 px-3 text-[1rem] w-full border border-[#e8e8e1] block tracking-[.025em] font-medium"
          />
          <TextInput
            innserRef={description}
            id="description"
            title="Description *"
            name="description"
            value={product?.description}
          />
          <TextInput
            innserRef={color}
            id="color"
            title="Color *"
            name="color"
            value={product?.color}
          />
          <TextInput
            innserRef={material}
            id="material"
            title="Material *"
            name="material"
            value={product?.material}
          />
          <TextInput
            innserRef={size}
            id="size"
            title="Size *"
            name="size"
            value={product?.size}
          />
        </div>
        <div className="flex gap-6 justify-end pb-8">
          <AdminButton
            type="delete"
            onclick={() => formSendHandler("delete")}
          />
          <AdminButton type="save" onclick={() => formSendHandler("save")} />
        </div>
      </AdminContainer>
    </>
  );
}

export default CategoryEdit;
