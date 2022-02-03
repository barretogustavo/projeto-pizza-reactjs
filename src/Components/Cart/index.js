import React from 'react';
import { AsideMenu } from '../../styles';

function Cart() {
  return (
    <AsideMenu>
        <div className="cart--area">
            <div className="menu-closer">❌</div>
            <h1>Suas Pizzas</h1>
            <div className="cart">
                <div className="cart--item">
                    <img src="" />
                    <div className="cart--item-nome">--</div>
                    <div className="cart--item--qtarea">
                        <button className="cart--item-qtmenos">-</button>
                        <div className="cart--item--qt">1</div>
                        <button className="cart--item-qtmais">+</button>
                    </div>
                </div>
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
    </AsideMenu>
  );
}

export default Cart;
