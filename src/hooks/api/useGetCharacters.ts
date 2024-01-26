import { useQuery } from "@tanstack/react-query";
import { Character } from "types";
import { getReq } from "lib";
import { AxiosError } from "axios";
import { message } from "antd";

interface SwapiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}

interface GetCharacterParams {
  page: number;
}

const useGetCharacters = (params: GetCharacterParams) => {
  const { page } = params;
  return useQuery<SwapiResponse, AxiosError>(
    ["people", params],
    () => getReq<SwapiResponse>(`people?page=${page}`),
    {
      onError: (err: AxiosError) => {
        console.log("error", err.message);
        message.error(err.message, 5);
      },
    }
  );
};

export default useGetCharacters;
