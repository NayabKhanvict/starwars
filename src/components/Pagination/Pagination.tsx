import { Pagination as AntPagination, PaginationProps } from "antd";
import styles from "./Pagination.module.scss";

const Pagination = ({ ...rest }: PaginationProps) => {
  return <AntPagination className={styles.pagination} {...rest} />;
};

export default Pagination;
