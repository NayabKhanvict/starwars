import { startWarsVisualsBaseUrl } from "lib";

export const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return "";
  const originalDate = new Date(dateString);
  const formattedDate = originalDate
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-");
  return formattedDate;
};

export const getCharacterId = (url: string): string => {
  const splited = url.split("/");
  const characterId = splited[splited.length - 2];
  return characterId;
};

export const getCharacterImageUrl = (characterUrl: string) => {
  const imageUrl = `${startWarsVisualsBaseUrl}${getCharacterId(
    characterUrl
  )}.jpg`;
  return imageUrl;
};

export const getPlanetId = (homeworldUrl: string | undefined) => {
  if (!homeworldUrl) return "";
  const planetId = homeworldUrl?.split("/")[5];
  return planetId;
};
