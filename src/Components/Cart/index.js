import React from 'react';
import { CartMenu } from '../../styles';
import CartItem from '../CartItem';
import { BsFillCartXFill } from 'react-icons/bs';

function Cart({cartList, pizzas}) {
    
  return (
      cartList.length > 0 ?
    <CartMenu>
        <div className="cart--area">
            <h1>Suas Pizzas</h1>
            <div className="cart">
                <CartItem cartList={cartList} pizzas={pizzas} />
            </div>
            <div className="cart--details">
                <div className="cart--totalitem subtotal">
                    <span>Subtotal</span>
                    <span>R$ --</span>
                </div>
                <div className="cart--totalitem desconto">
                    <span>Desconto (-10%)</span>
                    <span>R$ --</span>
                </div>
                <div className="cart--totalitem total big">
                    <span>Total</span>
                    <span>R$ --</span>
                </div>
                <div className="cart--finalizar">Finalizar a compra</div>
            </div>
        </div>
    </CartMenu>
    :<i><BsFillCartXFill size={40} style={{marginLeft:60, color:'#CCC', cursor:'not-allowed'}}/></i>
  );
}

export default Cart;
