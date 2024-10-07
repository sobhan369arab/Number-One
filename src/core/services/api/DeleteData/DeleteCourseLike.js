import Http from "../../interceptor";
import onFormData from "../FormData";

const DeleteCourseLike = async (ParamsId) => {
  alert()
  try {
    const obj = {
      CourseLikeId: ParamsId,
    };

    const dataObj = onFormData(obj);

    const result = await Http.delete(`/Course/DeleteCourseLike`, {
      data: dataObj,
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(result);
    if (result.success) {
      alert("yes");
    } else {
      alert("no");
    }
  } catch (error) {
    console.log(error);
  }
};

export default DeleteCourseLike;
