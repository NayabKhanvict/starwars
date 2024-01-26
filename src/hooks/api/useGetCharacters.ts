import { useQuery } from "@tanstack/react-query";
import { Character } from "types";
import { getReq } from "lib";

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
  return useQuery<SwapiResponse>(["people", params], () =>
    getReq<SwapiResponse>(`people?page=${page}`)
  );
};

export default useGetCharacters;
