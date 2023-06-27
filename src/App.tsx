import { useState } from "react";
import Modal from "./components/Modal/Modal";
import Button from '@mui/material/Button';
import "./App.scss";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlerCloseModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <Button className="button" onClick={handlerCloseModal} variant="contained">
        Open Modal
      </Button>

      <Modal show={isModalOpen} title="My Modal" close={handlerCloseModal} />
    </div>
  );
}

export default App;
