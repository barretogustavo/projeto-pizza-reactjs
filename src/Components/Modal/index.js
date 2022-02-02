import Modal from 'react-modal/lib/components/Modal';
import React, { useState } from 'react';

Modal.setAppElement('#root');

function PizzaWindowBody() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModal = (e)=> {
        e.preventDefault();
        setModalIsOpen(true);
        console.log('Rodou')
    }

    const handleCloseModal = ()=> {
        setModalIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto'
        }
    }

  return (
    <div>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}>

            <p> Testando modal!!!!!!!</p>

        </Modal>
   </div>
  );
}

export default PizzaWindowBody;
