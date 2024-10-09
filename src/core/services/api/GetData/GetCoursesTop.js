import http from "../../interceptor";

const GetCoursesTop = async (count) => {
  const response = await http.get(`/Home/GetCoursesTop?Count=${count}`);
  return response;
};

export default GetCoursesTop;
