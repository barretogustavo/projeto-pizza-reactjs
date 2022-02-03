import React from 'react';

function CartItem({cartList, pizzas}) {

    console.log('Passando de mão em mão: ', cartList);
    
  return cartList.map((cartList)=>(
              
    <div className="cart--item" cartList={cartList} pizzas={pizzas} key={cartList}>
        <img src={pizzas[cartList].img} alt="Miniatura pizza" />
        <div className="cart--item-nome">{pizzas[cartList].name}</div>
        <div className="cart--item--qtarea">
            <button className="cart--item-qtmenos">-</button>
            <div className="cart--item--qt">1</div>
            <button className="cart--item-qtmais">+</button>
        </div>
    </div>

  ));
}

export default CartItem;
