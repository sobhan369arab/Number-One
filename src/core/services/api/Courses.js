import http from "../interceptor";

export const GetTechnologies = async (setState) => {
  try {
    const request = await http.get("/Home/GetTechnologies");
    return request;
  } catch (error) {
    return [];
  }
};

export const GetAllCourseByPagination = async (apiParams) => {
  try {
    const request = await http.get("/Home/GetCoursesWithPagination", {
      params: apiParams,
    });

    return request;
  } catch (error) {
    return [];
  }
};
