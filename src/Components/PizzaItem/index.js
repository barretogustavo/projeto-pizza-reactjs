import React from 'react';
import { PizzaItem } from '../../styles';

function Pizza() {

    const pizzaJson = [
        {id:1, name:'Mussarela', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza.png?raw=true', price:20.19, sizes:['100g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
        {id:2, name:'Calabresa', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza2.png?raw=true', price:18.00, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
        {id:3, name:'Quatro Queijos', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza3.png?raw=true', price:17.45, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
        {id:4, name:'Americana', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza4.png?raw=true', price:19.77, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
        {id:5, name:'Sorvete', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza5.png?raw=true', price:21.43, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
        {id:6, name:'Moda da Casa', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza6.png?raw=true', price:18.55, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
        {id:7, name:'Chocolate', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza7.png?raw=true', price:22.36, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'}
    ];

  return pizzaJson.map((pizza, index)=>(
    <PizzaItem key={index}>
        <div className="plus-button">
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
