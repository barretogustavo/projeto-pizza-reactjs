import Cart from "./Components/Cart";
import PizzaWindowBody from "./Components/Modal";
import Nav from "./Components/Nav";
import Pizza from "./Components/PizzaItem";
import { PizzaArea } from "./styles";
import GlobalStyle from './styles/global';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <PizzaArea>
        <Pizza />
      </PizzaArea>
      <Cart />
      <PizzaWindowBody />

      
    </div>
  );
}

export default App;
