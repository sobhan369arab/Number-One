import http from "../../interceptor";

const GetMyCoursesReserve = async () => {
  const response = await http.get("/SharePanel/GetMyCoursesReserve");
  return response;
};

export default GetMyCoursesReserve;
