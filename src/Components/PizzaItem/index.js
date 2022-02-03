import React from 'react';
import { PizzaItem } from '../../styles';

function Pizza({pizzas, handleOpenModal}) {

  return pizzas.map((pizza)=>(
    <PizzaItem key={pizza.id}>
        <div className="plus-button" onClick={(e)=>handleOpenModal(e, pizza.id)}>
            <div className="pizza-item--img">
                <img src={pizza.img} width={200} alt='Pizza' />
            </div>
            <div className="pizza-item--add" >+</div>
        </div>
        <div className="pizza-item--price">R$ {pizza.price}</div>
        <div className="pizza-item--name">{pizza.name}</div>
        <div className="pizza-item--desc">{pizza.description}</div>
    </PizzaItem>    
  ));

}

export default Pizza;
