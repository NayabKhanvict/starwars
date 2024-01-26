import { CharacterCard, Pagination, Spin } from "components";
import { useGetCharacters } from "hooks/api";
import styles from "./Home.module.scss";
import { useCallback, useState } from "react";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useGetCharacters({ page: page });
  const { results: characters } = data || {};

  const onPageChange = useCallback((selectedPage: number) => {
    setPage(selectedPage);
  }, []);

  return (
    <Spin spinning={isLoading}>
      <div className={styles.home}>
        <Pagination
          current={page}
          onChange={onPageChange}
          total={100}
          simple
          showSizeChanger={false}
          className={styles.homePaginationContainer}
        />
        <div className={styles.homeCardsContainer}>
          {characters?.map((character, index) => (
            <CharacterCard
              key={`${character.name}${index}`}
              title={character.name}
              description={character.skin_color}
            />
          ))}
        </div>
      </div>
    </Spin>
  );
};

export default Home;
