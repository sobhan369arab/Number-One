import { toast } from "react-toastify";
import Http from "../../interceptor";
import onFormData from "../FormData";

const DeleteCourseCommentLike = async (ParamsId, refetch) => {
  console.log(ParamsId);
  try {
    // const obj = {
    //   CourseLikeId: ParamsId,
    // };
    // const dataObj = onFormData(obj);
    const result = await Http.delete(
      `/Course/DeleteCourseCommentLike?CourseCommandId=${ParamsId}`
    );
    //   data: dataObj,
    //   headers: { "Content-Type": "multipart/form-data" },

    if (result.success) {
      toast.success("نظر شما برداشته شد");
      refetch();
      return result;
    } else {
      toast.error("لطفا دوباره تلاش کنید");
    }
    return;
  } catch (error) {
    console.log(error);
  }
};

export default DeleteCourseCommentLike;
