import { Spin as AntSpin, SpinProps } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styles from "./Spin.module.scss";

const Spin = ({ ...rest }: SpinProps) => (
  <AntSpin
    className={styles.spin}
    indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />}
    {...rest}
  />
);

export default Spin;
