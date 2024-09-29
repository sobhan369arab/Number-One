import http from "../interceptor";

export const GetNewsFilterPage = (apiParams) => {
  try {
    const response = http.get("/News", { params: apiParams });
    return response;
  } catch (error) {
    return [];
  }
};
