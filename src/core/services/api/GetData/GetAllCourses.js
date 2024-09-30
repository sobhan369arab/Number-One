import http from "../../interceptor";

const GetAllCourseByPagination = async (apiParams, pageNumber, numPerPage) => {
  try {
    const request = await http.get(
      `/Home/GetCoursesWithPagination?PageNumber=${pageNumber}&RowsOfPage=${numPerPage}`,
      {
        params: apiParams,
      }
    );

    return request;
  } catch (error) {
    return [];
  }
};
export default GetAllCourseByPagination;
