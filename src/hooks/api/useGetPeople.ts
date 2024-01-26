import { message } from "antd";
import { useQuery } from "@tanstack/react-query";
import { Character } from "types";
import { getReq } from "lib";
import { AxiosError } from "axios";

interface GetPeopleAPI {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}

interface GetPeopleParams {
  page: number;
}

const useGetPeople = (params: GetPeopleParams) => {
  const { page } = params;
  return useQuery<GetPeopleAPI, AxiosError>(
    ["people", params],
    () => getReq<GetPeopleAPI>(`people?page=${page}`),
    {
      onError: (err: AxiosError) => {
        message.error(err.message, 5);
      },
    }
  );
};

export default useGetPeople;
