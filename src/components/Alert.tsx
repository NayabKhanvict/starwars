import { AlertProps, Alert as AntAlert } from "antd";

const Alert = ({ ...rest }: AlertProps) => {
  return <AntAlert {...rest} />;
};

export default Alert;
