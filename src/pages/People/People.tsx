import { useCallback, useState } from "react";
import { CharacterCard, Pagination, Spin } from "components";
import { useGetPeople } from "hooks/api";
import { Character } from "types";
import { CharacterModal } from "components/Modals";
import styles from "./People.module.scss";

const People = () => {
  const [page, setPage] = useState<number>(1);
  const [characterModalConfig, setCharacterModalConfig] = useState<{
    visible: boolean;
    character: Character | null;
  }>({
    visible: false,
    character: null,
  });
  const { data, isLoading } = useGetPeople({ page: page });
  const { results: characters } = data || {};

  const onPageChange = useCallback((selectedPage: number) => {
    setPage(selectedPage);
  }, []);

  const handleClickCharacterCard = (character: Character) => {
    setCharacterModalConfig({ visible: true, character: character });
  };

  return (
    <Spin spinning={isLoading}>
      <div className={styles.people}>
        <Pagination
          current={page}
          onChange={onPageChange}
          total={data?.count}
          simple
          showSizeChanger={false}
          className={styles.peoplePaginationContainer}
        />
        <div className={styles.peopleCardsContainer}>
          {characters?.map((character, index) => (
            <CharacterCard
              key={`${character.name}${index}`}
              character={character}
              onClick={handleClickCharacterCard}
            />
          ))}
        </div>
      </div>
      <CharacterModal
        characterModalConfig={characterModalConfig}
        setCharacterModalConfig={setCharacterModalConfig}
      />
    </Spin>
  );
};

export default People;
