import "./Modal.scss";
import imageClose from "../../assets/images/close-icon.svg";
import imageCreditCard from "../../assets/images/icon-credit-card.svg";
import imageDocument from "../../assets/images/icon-document.svg";
import Form from "../Form/Form";
import Button from "@mui/material/Button";

type ModalContentProps = {
  title: string;
  close: React.MouseEventHandler<HTMLButtonElement>;
};

// const dataContent = [
//   {label: 'Drop-down Text 1'},
//   {label: 'Drop-down Text 2'},
//   {label: 'Drop-down Text 3'},
//   {label: 'Drop-down Text 4'}
// ]

const modalContent = ({ title, close }: ModalContentProps) => (
  <div className="modalContainer">
    <div className="modal">
      <div className="modalBlock"></div>
      <div className="modalBlock modalBlockRight">
        <header className="modal_header flex-between">
          <div className="modal_title flex-start">
            Create new Card
            <img src={imageCreditCard} alt="Credit Card" />
          </div>
          <div className="flex-between">
            <div className="header_label flex-between">
              <img src={imageDocument} alt="Icon" />
              New
            </div>

            <button className="close" onClick={close}>
              <img src={imageClose} alt="close" />
            </button>
          </div>
        </header>
        <Form />

        <footer className="modal_footer flex-end">
          <Button
            className="modal-close"
            disabled
            variant="contained"
            onClick={close}
            style={{ borderRadius: 10 }}
          >
            Save
          </Button>
        </footer>
      </div>
    </div>
  </div>
);

type ModalProps = {
  show: boolean;
  title: string;
  close: React.MouseEventHandler<HTMLButtonElement>;
};

const Modal = ({ show, title, close }: ModalProps) => {
  return <>{show ? modalContent({ title, close }) : null}</>;
};

export default Modal;
