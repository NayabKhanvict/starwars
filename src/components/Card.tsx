import { Card as AntCard, CardProps } from "antd";
const Card = ({ ...rest }: CardProps) => {
  return <AntCard style={{ borderRadius: 0 }} {...rest} />;
};

export default Card;
