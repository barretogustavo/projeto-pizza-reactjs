import { useState } from "react";
import Cart from "./Components/Cart";
import PizzaWindowBody from "./Components/Modal";
import Nav from "./Components/Nav";
import PizzaItem from "./Components/PizzaItem";
import { PizzaArea } from "./styles";
import GlobalStyle from './styles/global';


function App() {

  const [pizzas, setPizzas] = useState([
    {id:1, name:'Mussarela', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza.png?raw=true', price:20.19, sizes:['100g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:2, name:'Calabresa', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza2.png?raw=true', price:18.00, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:3, name:'Quatro Queijos', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza3.png?raw=true', price:17.45, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:4, name:'Americana', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza4.png?raw=true', price:19.77, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:5, name:'Sorvete', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza5.png?raw=true', price:21.43, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:6, name:'Moda da Casa', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza6.png?raw=true', price:18.55, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:7, name:'Chocolate', img:'https://github.com/barretogustavo/Ecommerce-Pizza/blob/main/images/pizza7.png?raw=true', price:22.36, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'}
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPizza, setCurrentPizza] = useState(0);

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

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <PizzaArea>
        <PizzaItem pizzas={pizzas} handleOpenModal={handleOpenModal}  />
      </PizzaArea>
      <Cart />
      <PizzaWindowBody 
        modalIsOpen={modalIsOpen} 
        handleCloseModal={handleCloseModal} 
        currentPizza={currentPizza} 
        pizzas={pizzas} />

    </div>
  );
}

export default App;
