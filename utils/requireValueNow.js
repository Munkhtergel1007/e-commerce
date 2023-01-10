import { toast } from "react-toastify";

const requireValueNow = (ref, type = "text") => {
  let isEmpty = false;

  console.log(ref);

  switch (type) {
    case "text":
      if (ref.current.value === "" || ref.current.value === null) {
        ref.current.focus();
        toast.warning("Та " + ref.current.name + "-ээ оруулна уу.");
        isEmpty = true;
      }
      break;
    case "email":
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(ref.current.value)) {
        ref.current.focus();
        toast.warning("Та и-мэйлээ зөв оруулна уу.");
        isEmpty = true;
      }
      break;
    case "file":
      if (
        ref.current.files[0].value === "" ||
        ref.current.files[0].value === null
      ) {
        ref.current.focus();
        toast.warning("Та " + ref.current.name + "-ээ оруулна уу.");
        isEmpty = true;
      }
      break;
    default:
      break;
  }

  return isEmpty;
};

export default requireValueNow;
