import React, {useEffect, useState} from 'react';
import { CartMenu } from '../../styles';
import CartItem from '../CartItem';
import { BsFillCartXFill } from 'react-icons/bs';

function Cart({cartList, pizzas, totalCart}) {

    const [subTotal, setSubtotal] = useState(0);
    
    //Whenever cartList run, the subtotal is calculed
    useEffect(()=>{
        const calculating = totalCart.reduce((a, v) =>  a = a + v , 0 );
        setSubtotal(calculating);
        console.log('Subtotal: ', calculating )
        
    }, [cartList]);
    
  return (
      cartList.length > 0 ?
    <CartMenu>
        <div className="cart--area">
            <h1>Suas Pizzas:</h1>
            <div className="cart">
                <CartItem cartList={cartList} pizzas={pizzas} />
            </div>
            <div className="cart--details">
                <div className="cart--totalitem subtotal">
                    <span>Subtotal</span>
                    <span>R$ {subTotal.toFixed(2)}</span>
                </div>
                <div className="cart--totalitem desconto">
                    <span>Desconto (-10%)</span>
                    <span>R$ {(subTotal * 0.1).toFixed(2)}</span>
                </div>
                <div className="cart--totalitem total big">
                    <span>Total</span>
                    <span>R$ {(subTotal - (subTotal * 0.1)).toFixed(2)}</span>
                </div>
                <div className="cart--finalizar">Finalizar a compra</div>
            </div>
        </div>
    </CartMenu>
    :<i><BsFillCartXFill size={40} style={{marginLeft:60, color:'#CCC', cursor:'not-allowed'}}/></i>
  );
}

export default Cart;
