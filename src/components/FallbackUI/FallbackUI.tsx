import { Spin } from "components";
import styles from "./FallbackUI.module.scss";

const FallbackUI = () => {
  return (
    <div className={styles.fallbackUIContainer} data-testid="fallback-ui">
      <Spin size="large" />
    </div>
  );
};

export default FallbackUI;
