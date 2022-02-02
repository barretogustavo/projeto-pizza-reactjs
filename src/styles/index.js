import styled from "styled-components";

export const NavMenu = styled.nav`

width:100%;
height:50px;
margin: 30px 0px 30px 0px ;
border-bottom:1px solid #eee;
display:flex;
justify-content:flex-start;
align-items:center;

    h1{
        font-size:30px;
        margin-left:30px;
    }

`;

export const PizzaArea = styled.div`
    display: flex;
    flex-wrap:wrap;
`;

export const PizzaItem = styled.div`

text-align: center;
max-width:250px;
font-family:'Hepta Slab', Helvetica, Arial;
margin:0 auto 50px auto;

    a {
    display:flex;
    flex-direction: column;
    align-items:center;
    text-decoration: none;
        
        :hover .pizza-item--add {
        background-color:#244c88;
        }
    }

    .pizza-item--img {
    width:200px;
    height:200px;
    background-color:#EEE;
    border-radius:100px;
    box-shadow:0px 10px 50px rgba(0, 0, 0, 0.2);

        img {
        width:100%;
        height:auto;
        }
    }

    .pizza-item--add {
    width:50px;
    height:50px;
    line-height:50px;
    border-radius:25px;
    background-color:#388bc5;
    text-align:center;
    color:#FFF;
    font-size:22px;
    cursor:pointer;
    margin-top:-25px;
    transition:all ease .2s;
    }

    .pizza-item--price {
        font-size:15px;
        color:#333;
        margin-top:5px;
    }
    .pizza-item--name {
        font-size:20px;
        font-weight: bold;
        color:#000;
        margin-top:5px;
    }
    .pizza-item--desc {
        font-family: 'Hepta slab';
        font-size:13px;
        color:#555;
        margin-top:10px;
    }

`;