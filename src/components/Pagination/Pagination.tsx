import { Pagination as AntPagination, PaginationProps } from "antd";
import styles from "./Pagination.module.scss";

const Pagination = ({ ...rest }: PaginationProps) => {
  return (
    <AntPagination
      className={styles.pagination}
      {...rest}
      data-testid="pagination"
    />
  );
};

export default Pagination;
