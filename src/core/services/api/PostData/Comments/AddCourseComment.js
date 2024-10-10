import { toast } from "react-toastify";
import Http from "../../../interceptor";
import onFormData from "../../FormData";

const AddCourseComment = async (CourseId, data, refetch) => {
  alert();
  console.log(data);
  try {
    const obj = {
      CourseId: CourseId,
      Title: data.title,
      Describe: data.description,
    };
    const formData = onFormData(obj);
    console.log(formData);

    const result = await Http.post(`/Course/AddCommentCourse`, formData);
    if (result.success) {
      toast.success("نظر شما برای بررسی توسط ادمین ارسال شد");
      // Accept();
      refetch();
    } else if(result.error) {
      toast.error("لطفا دوباره تلاش کنید");
    }
  } catch (error) {
    console.log(error);
  }
};
// data: formData,
// headers: { "Content-Type": "multipart/form-data" },

export default AddCourseComment;
