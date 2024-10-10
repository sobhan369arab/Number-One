import { toast } from "react-toastify";
import Http from "../../../interceptor";
import onFormData from "../../FormData";

const AcceptCourseComment = async (ParamsId) => {
    console.log(ParamsId)
  const obj = {
    CommentCourseId: ParamsId,
  };
  const formData = onFormData(obj);
  try {
    const result = await Http.post(`/Course/AcceptCourseComment`, formData);
    if (result.success) {
      toast.success("نظر شما با موفقیت ثبت شد");
    } else {
      toast.error("نظر شما ثبت نشد , لطفا دوباره تلاش کنید");
    }
  } catch (error) {
    console.log(error);
  }
};
export default AcceptCourseComment;
