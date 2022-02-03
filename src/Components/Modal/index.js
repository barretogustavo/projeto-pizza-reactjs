import Modal from 'react-modal/lib/components/Modal';
import React from 'react';
import { ModalStyle } from '../../styles';

Modal.setAppElement('#root');

function PizzaWindowBody({modalIsOpen, handleCloseModal, currentPizza, pizzas, cartList, addToCart}) {

    const customStyles = {
        content: {
            width: '900px',
            height: '470px',
            backgroundColor:' #FFF',
            bordeRadius: '10px',
            boxShadow: '0px 0px 15px #999',
            display: 'flex',
            margin: '20px 0px',
        }
    }

  return (
    <div>
        <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={()=>handleCloseModal()} 
            style={customStyles}>           

            <ModalStyle currentPizza={currentPizza} pizzas={pizzas}>
                <div className="pizzaBig">
                    <img src={pizzas[currentPizza].img} alt='Imagem da pizza' />
                </div>
                <div className="pizzaInfo">
                    <h1>{pizzas[currentPizza].name}</h1>
                    <div className="pizzaInfo--desc">{pizzas[currentPizza].description}</div>
                    <div className="pizzaInfo--sizearea">
                        <div className="pizzaInfo--sector">Tamanho</div>
                        <div className="pizzaInfo--sizes">
                            <div data-key="0" className="pizzaInfo--size">PEQUENA <span>--</span></div>
                            <div data-key="1" className="pizzaInfo--size">MÉDIO <span>--</span></div>
                            <div data-key="2" className="pizzaInfo--size selected">GRANDE <span>--</span></div>
                        </div>
                    </div>
                    <div className="pizzaInfo--pricearea">
                        <div className="pizzaInfo--sector">Preço</div>
                        <div className="pizzaInfo--price">
                            <div className="pizzaInfo--actualPrice">R$ {pizzas[currentPizza].price}</div>
                            <div className="pizzaInfo--qtarea">
                                <button className="pizzaInfo--qtmenos">-</button>
                                <div className="pizzaInfo--qt">1</div>
                                <button className="pizzaInfo--qtmais">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="pizzaInfo--addButton" onClick={()=>addToCart(currentPizza, cartList)}>Adicionar ao carrinho</div>
                    <div className="pizzaInfo--cancelButton" onClick={handleCloseModal}>Cancelar</div>
                </div>
            </ModalStyle>
        </Modal>
   </div>
  );
}

export default PizzaWindowBody;
