import { Spin } from "components";
import styles from "./FallbackUI.module.scss";

const FallbackUI = () => {
  return (
    <div className={styles.fallbackUIContainer}>
      <Spin size="large" />
    </div>
  );
};

export default FallbackUI;
