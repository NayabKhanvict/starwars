import { Modal as AntModal, ModalProps } from "antd";
import "./_modal.scss";

const Modal = ({ ...rest }: ModalProps) => {
  return <AntModal centered {...rest} className="modal" />;
};

export default Modal;
