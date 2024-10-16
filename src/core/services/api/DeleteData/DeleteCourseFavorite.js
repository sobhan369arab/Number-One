import { toast } from "react-toastify";
import Http from "../../interceptor";
import onFormData from "../FormData";

const DeleteCourseFavorite = async (ParamsId) => {
  try {
    const obj = {
      CourseFavoriteId: ParamsId,
    };
    const dataObj = onFormData(obj);
    const result = await Http.delete(`/Course/DeleteCourseFavorite`, {
      data: dataObj,
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (result.success) {
      toast.success("دوره مورد نظر از لیست علاقمندی ها حذف شد");
    } else {
      toast.error("لطفا دوباره تلاش کنید");
    }
  } catch (error) {
    console.log(error);
  }
};

export default DeleteCourseFavorite;
