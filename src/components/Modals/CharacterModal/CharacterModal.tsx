import Modal from "components/Modal";
import { Character } from "types";
import { Col, Flex, Row, Typography } from "antd";
import { Card, LabeledValue, Spin } from "components";
import { formatDate, getPlanetId } from "lib";
import { useGetPlanet } from "hooks/api";

const { Title } = Typography;

export interface CharacterModalConfig {
  visible: boolean;
  character: Character | null;
}

const CharacterModal = ({
  characterModalConfig,
  setCharacterModalConfig,
}: {
  characterModalConfig: CharacterModalConfig;
  setCharacterModalConfig: (val: CharacterModalConfig) => void;
}) => {
  const { visible, character } = characterModalConfig || {};
  const { name, height, mass, birth_year, created, films, homeworld } =
    character || {};
  const planetId = getPlanetId(homeworld);
  const { data: planet, isLoading } = useGetPlanet({ planetId });
  const { name: planetName, terrain, climate, residents } = planet || {};

  return (
    <Modal
      footer={null}
      open={visible}
      onCancel={() =>
        setCharacterModalConfig({ visible: false, character: null })
      }
      title={name}
      destroyOnClose
    >
      <Spin spinning={isLoading}>
        <Flex align="middle" justify="center">
          <Title level={4}>Profile</Title>
        </Flex>
        <Card>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <LabeledValue label="Height" value={`${Number(height) / 100}m`} />
            </Col>
            <Col span={12}>
              <LabeledValue label="Mass" value={`${mass}kg`} />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <LabeledValue label="Birth Year" value={birth_year} />
            </Col>
            <Col span={12}>
              <LabeledValue label="Number of Films" value={films?.length} />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <LabeledValue
                label="Date Added to API"
                value={formatDate(created)}
              />
            </Col>
          </Row>
        </Card>
        <Flex align="middle" justify="center">
          <Title level={4}>Homeworld Info</Title>
        </Flex>
        <Card>
          <Row>
            <Col span={12}>
              <LabeledValue label="Name" value={planetName} />
            </Col>
            <Col span={12}>
              <LabeledValue label="Climate" value={climate} />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <LabeledValue
                label="Number of Residents"
                value={residents?.length}
              />
            </Col>
            <Col span={24}>
              <LabeledValue label="Terrain" value={terrain} />
            </Col>
          </Row>
        </Card>
      </Spin>
    </Modal>
  );
};

export default CharacterModal;
