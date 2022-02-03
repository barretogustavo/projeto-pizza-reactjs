import { useEffect, useState } from "react";
import Cart from "./Components/Cart";
import PizzaWindowBody from "./Components/Modal";
import Nav from "./Components/Nav";
import PizzaItem from "./Components/PizzaItem";
import { PizzaArea, Main } from "./styles";
import GlobalStyle from './styles/global';
import './App.css';


function App() {

  const [pizzas, setPizzas] = useState([
    {id:1, name:'Mussarela', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza.png?raw=true', price:20.19, sizes:['100g', '530g', '860g'], description:'Pizza de mussarela muito gostosa e com muito queijo legal e interessante.'},
    {id:2, name:'Calabresa', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza2.png?raw=true', price:18.00, sizes:['320g', '530g', '860g'], description:'Muita calabresa, totalmente recheada, leva catupiry nas bordas.'},
    {id:3, name:'Quatro Queijos', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza3.png?raw=true', price:17.45, sizes:['320g', '530g', '860g'], description:'Se é queijo que você quer, é queijo que você terá. '},
    {id:4, name:'Americana', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza4.png?raw=true', price:19.77, sizes:['320g', '530g', '860g'], description:'Eu não faço ideia do que vem na pizza Americana mas dizem que esse sabor existe'},
    {id:5, name:'Sorvete', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza5.png?raw=true', price:21.43, sizes:['320g', '530g', '860g'], description:'A pizza de sorvete é quente ou gelada? Os dois!'},
    {id:6, name:'Moda da Casa', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza6.png?raw=true', price:18.55, sizes:['320g', '530g', '860g'], description:'Essa pizza leva tudo que a gente encontrar na cozinha. Inclusive garfo e faca!'},
    {id:7, name:'Chocolate', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza7.png?raw=true', price:22.36, sizes:['320g', '530g', '860g'], description:'Você sabia que Nutella é a marca e o correto é Creme de avelã? Nem eu.'}
  ]);

  //Modal events & maping
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPizza, setCurrentPizza] = useState(0);
  const [cartList, setCartList] = useState([]);
  const [totalCart, setTotalCart] = useState([]);

    const handleOpenModal = (e, id)=> {
        e.preventDefault();
        setCurrentPizza(id - 1)
        setModalIsOpen(true);
        console.log('Rodou a pizza: ', id);
        console.log('A pizza selecionada é:', currentPizza);
    }

    const handleCloseModal = ()=> {
        setModalIsOpen(false);
    }

    //Inserting pizzas in the cart
    const addToCart = (currentPizza, cartList, quantityPizza)=>{
        const newCartList = [...cartList, currentPizza];
        setCartList(newCartList);
        handleCloseModal();
        console.log('Lista de pizzas: ', newCartList);
        console.log('Quantidade da pizza X: ', quantityPizza);
    }
    
    //Calculating
    const calculatingTotalCart = ()=>{
      pizzas.map(()=>{
        console.log(pizzas[0].price);
      });

      
    }

  return (
    <div className="App">
      <button onClick={calculatingTotalCart}> calcular log</button>
    <GlobalStyle />
    <Nav />
    <Main>
        <Cart cartList={cartList} pizzas={pizzas} />
        <PizzaArea className="pizza-area-css">
          <PizzaItem pizzas={pizzas} handleOpenModal={handleOpenModal}  />
        </PizzaArea>
    </Main>
    

      
      <PizzaWindowBody
        modalIsOpen={modalIsOpen} 
        handleCloseModal={handleCloseModal} 
        currentPizza={currentPizza} 
        pizzas={pizzas} 
        cartList={cartList}
        addToCart={addToCart} />

    </div>
  );
}

export default App;
