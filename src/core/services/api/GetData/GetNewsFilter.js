import http from "../../interceptor";

 const GetNewsFilterPage = (apiParams) => {
  try {
    const response = http.get("/News", { params: apiParams });
    return response;
  } catch (error) {
    return [];
  }
};
export default GetNewsFilterPage
