import http from "../../interceptor";

const GetNewsComments = async (id) => {
  return await http.get(`/News/GetNewsComments?NewsId=${id}`);
};

export default GetNewsComments;
