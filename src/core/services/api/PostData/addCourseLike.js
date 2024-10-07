import { toast } from "react-toastify";
import Http from "../../interceptor";

const AddCourseLike = async (ParamsId) => {
  console.log(ParamsId);
  try {
    const result = await Http.post(`/Course/AddCourseLike?CourseId=${ParamsId}`);
    console.log(result);

    if (result.success) {
      toast.success('دوره مورد نظر لایک شد')
    } else {
      toast.error('دوباره تلاش کنید')
    }
  } catch (error) {
    console.log(error);
  }
};

export default AddCourseLike;
