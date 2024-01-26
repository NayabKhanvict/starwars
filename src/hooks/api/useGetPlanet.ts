import { message } from "antd";
import { useQuery } from "@tanstack/react-query";
import { Planet } from "types";
import { getReq } from "lib";
import { AxiosError } from "axios";

interface GetPlanetParams {
  planetId: string;
}

const useGetPlanet = (params: GetPlanetParams) => {
  const { planetId } = params;
  return useQuery<Planet, AxiosError>(
    ["people", params],
    () => getReq<Planet>(`planets/${planetId}/`),
    {
      enabled: Boolean(planetId),
      onError: (err: AxiosError) => {
        message.error(err.message, 5);
      },
    }
  );
};

export default useGetPlanet;
