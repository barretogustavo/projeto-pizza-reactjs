import React from 'react';

function CartItem({cartList, pizzas}) {
  
  return cartList.map((cartList)=>(
    
    <div className="cart--item" pizzas={pizzas} key={cartList}>
        <img src={pizzas[cartList].img} alt="Miniatura pizza" />
        <div className="cart--item-nome">{pizzas[cartList].name}</div>
        <div className="cart--item--qtarea">
            <button className="cart--item-qtmenos">-</button>
            <div className="cart--item--qt">...</div>
            <button className="cart--item-qtmais">+</button>
        </div>
    </div>

  ));
}

export default CartItem;
