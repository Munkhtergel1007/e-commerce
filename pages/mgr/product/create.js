import Head from "next/head";
import AdminButton from "../../../Components/adminButton";
import AdminContainer from "../../../Components/adminContainer";
import AdminHeader from "../../../Components/adminHeader";
import AdminTitle from "../../../Components/adminTitle";
import { Label } from "../../../Components/label";
import { TextInput } from "../../../Components/textInput";
import requireValueNow from "../../../utils/requireValueNow";
import Select from "react-select";
import { Loading } from "../../../Components/Loading";
import useGetDepartment from "../../../hooks/useDepartment";
import useGetCategories from "../../../hooks/useGetCategory";
import { useRef, useState } from "react";
import API from "../../../api";

function CategoryEdit() {
  const name = useRef(null);
  const price = useRef(null);
  const img = useRef(null);
  const category = useRef(null);
  const department = useRef(null);
  const description = useRef(null);
  const color = useRef(null);
  const material = useRef(null);
  const size = useRef(null);
  const { loading: depLoading, data: departments } = useGetDepartment();
  const { loading: catLoading, data: categories } = useGetCategories();
  const [selectedDepOption, setSelectedDepOption] = useState();
  const [selectedCatOption, setSelectedCatOption] = useState(null);
  //   if (requireValueNow(name)) {
  //     return;
  //   }
  //   if (requireValueNow(price)) {
  //     return;
  //   }
  //   if (requireValueNow(image)) {
  //     return;
  //   }
  //   if (requireValueNow(category)) {
  //     return;
  //   }
  //   if (requireValueNow(department)) {
  //     return;
  //   }
  //   if (requireValueNow(description)) {
  //     return;
  //   }
  //   if (requireValueNow(color)) {
  //     return;
  //   }
  //   if (requireValueNow(material)) {
  //     return;
  //   }
  //   if (requireValueNow(size)) {
  //     return;
  //   }

  var departmentOptions = [];
  var categoryOptions = [];
  departments?.map((el) => {
    departmentOptions.push({ value: el.name, label: el?.name, _id: el?._id });
  });
  categories?.map((el) => {
    categoryOptions.push({ value: el.name, label: el?.name, _id: el?._id });
  });

  const createProduct = () => {
    const data = {
      title: name.current.value,
      price: price.current.value,
      category: selectedCatOption?._id,
      department: selectedDepOption?._id,
      description: description.current.value,
      color: color.current.value,
      material: material.current.value,
      size: size.current.size,
      img: img.current.value,
    };
    API.post("/addProduct", {
      data: data,
    }).then((result) => {
      if (result.status === 200) {
        alert("Successfully created");
        window.location.href = "/mgr/product";
      }
    });
  };

  // --------------------------------- api ---------------------------------
  return (
    <>
      {depLoading || catLoading ? <Loading /> : null}
      <Head>
        <title>Product create</title>
      </Head>
      <AdminHeader />
      <AdminContainer>
        <AdminTitle title="Product create" />
        <div>
          <TextInput
            innserRef={name}
            id="name"
            title="Name *"
            name="name"
            value=""
          />
          <TextInput
            innserRef={price}
            id="price"
            title="Price *"
            name="price"
            type="number"
            value=""
          />
          <TextInput
            innserRef={img}
            id="image"
            title="Image *"
            name="image"
            value=""
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
            value=""
          />
          <TextInput
            innserRef={color}
            id="color"
            title="Color *"
            name="color"
            value=""
          />
          <TextInput
            innserRef={material}
            id="material"
            title="Material *"
            name="material"
            value=""
          />
          <TextInput
            innserRef={size}
            id="size"
            title="Size *"
            name="size"
            value=""
          />
        </div>
        <div className="flex gap-6 justify-end pb-8">
          <AdminButton type="save" onclick={createProduct} />
        </div>
      </AdminContainer>
    </>
  );
}

export default CategoryEdit;
