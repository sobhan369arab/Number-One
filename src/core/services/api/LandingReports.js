import http from "../interceptor";

export const GetLandingReports = () => {
  try {
    const response = http.get("/Home/LandingReport");
    return response;
  } catch (error) {
    return [];
  }
};
