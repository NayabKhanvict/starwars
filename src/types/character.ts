export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: CharacterSkinColor;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: unknown[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export type CharacterSkinColor =
  | "white"
  | "blue"
  | "red"
  | "fair"
  | "light"
  | "pale"
  | "unknown"
  | "metal"
  | "green-tan, brown"
  | "brown mottle"
  | "brown"
  | "green"
  | "grey"
  | "dark"
  | "gold"
  | "white, blue"
  | "white, red";

export type CharacterSkinColorMap = {
  [key in CharacterSkinColor]: string;
};
