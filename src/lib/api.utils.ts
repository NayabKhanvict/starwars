import { AxiosResponse } from "axios";
import { api } from "./api";

const getReq = async <T>(url: string): Promise<T> => {
  const response: AxiosResponse<T> = await api.get(url);
  return response.data;
};

export { getReq };
