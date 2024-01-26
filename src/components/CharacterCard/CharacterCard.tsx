import { Card } from "antd";
const { Meta } = Card;

interface CharacterCardProps {
  title: string;
  description?: string;
}

const CharacterCard = ({ title, description }: CharacterCardProps) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    }
  >
    <Meta title={title} description={description} />
  </Card>
);

export default CharacterCard;
