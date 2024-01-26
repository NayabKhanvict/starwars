import { Flex, Typography } from "antd";
const { Title, Text } = Typography;

interface LabeledValueProps {
  label: string;
  value: string | number | null | undefined;
}

const LabeledValue = ({ label, value }: LabeledValueProps) => {
  return (
    <Flex align="baseline" gap="small">
      <Title level={5}>{label}:</Title>
      <Text>{value || ""}</Text>
    </Flex>
  );
};

export default LabeledValue;
