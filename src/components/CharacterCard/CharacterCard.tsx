import { Card } from "antd";
import { getCharacterImageUrl, characterSkinColorMap } from "lib";
import { Character } from "types";

interface CharacterCardProps {
  character: Character;
  onClick: (character: Character) => void;
}

const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  const { name, skin_color, url } = character || {};
  return (
    <Card
      hoverable
      style={{ width: 240, backgroundColor: characterSkinColorMap[skin_color] }}
      cover={<img alt="character" src={getCharacterImageUrl(url)} />}
      onClick={() => onClick(character)}
    >
      <Card.Meta title={name} description={skin_color} />
    </Card>
  );
};

export default CharacterCard;
