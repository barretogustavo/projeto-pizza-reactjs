import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Hepta+Slab:400,700|Lato:400,700&display=swap');
  * {
      box-sizing: border-box;
  }

  body{
    padding: 40px ;
    background-color: #EEE;
    font-family: 'Lato',Helvetica,Arial;
    font-size: 15px;
    display: flex;
    justify-content:center;
    align-items:center;
    margin: 0;
    min-height: 100vh;
  }

  button {
    cursor: pointer;
  }
`;