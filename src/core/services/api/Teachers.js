import http from "../interceptor";

export const getAllTeachers = () => {
  try {
    const response = http.get("/Home/GetTeachers");
    return response;
  } catch (error) {
    return [];
  }
};
