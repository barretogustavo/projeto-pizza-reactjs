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

    .plus-button {
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

export const ModalStyle = styled.div`

display: flex;

    .pizzaBig {
        flex:1;
        display:flex;
        justify-content: center;
        align-items: center;
            img {
            margin-right: 20px ;
            height:400px;
            width:auto;
            }
    }

    .pizzaInfo {
        flex:1;
        font-family:'Hepta Slab', Helvetica, Arial;
        padding-bottom:50px;

            h1 {
            margin-top:50px;
            }

            .pizzaInfo--desc {
            font-size:15px;
            color:#999;
            margin-top:10px;
            font-family:'Lato',Helvetica,Arial;
            }
    }

    .pizzaInfo--sector {
        color:#CCC;
        text-transform: uppercase;
        font-size:14px;
        margin-top:30px;
        margin-bottom:10px;
    }

    .pizzaInfo--sizes {
        display:inline-flex;
        border-radius:10px;
        overflow:hidden;
    }

    .pizzaInfo--size {
        padding:10px 15px;
        color:#000;
        background-color:#EEE;
        font-size:13px;
        font-weight: bold;
        cursor:pointer;

            span {
            font-size:12px;
            color:#999;
            font-weight: normal;
            }

            :hover {
            background-color:#CCC;
            }
    }
    .pizzaInfo--size.selected {
        background-color:#399ade;
        color:#FFF;
            span {
            color:#D6D6D6;
            }
    }

    .pizzaInfo--price {
        display:flex;
        align-items:center;
    }

    .pizzaInfo--actualPrice {
        font-size:28px;
        margin-right:30px;
    }

    .pizzaInfo--qtarea {
        display:inline-flex;
        background-color:#EEE;
        border-radius:10px;
        height:30px;

            button {
            border:0;
            background-color:transparent;
            font-size:17px;
            outline:0;
            cursor:pointer;
            padding:0px 10px;
            color:#333;
            }
    }

    .pizzaInfo--qt {
        line-height: 30px;
        font-size: 12px;
        font-weight: bold;
        padding: 0px 5px;
        color:#000;
    }

    .pizzaInfo--addButton {
        margin-top:30px;
        padding:20px 30px;
        border-radius:20px;
        background-color:#48d05f;
        color:#FFF;
        display:inline-block;
        cursor:pointer;
        margin-right:30px;
            :hover {
            background-color:#32a345;
            }
    }

    .pizzaInfo--cancelButton {
        display:inline-block;
        cursor:pointer;
    }

    .pizzaInfo--cancelMobileButton {
        display:none;
        height:40px;
        text-align:center;
        line-height: 40px;
        margin-bottom:30px;
    }

`;

export const AsideMenu = styled.aside`
background-color:#9ccbe6;
width:30vw;
height: 100vh;
font-family:'Hepta Slab', Helvetica, Arial;
transition:all ease .2s;
overflow-x:hidden;

position:absolute;
left: calc(100% - 30vw);

    .cart--area {
        padding:20px;
    }

    .cart {
        margin-bottom:20px;
    }

    .cart--item {
        display:flex;
        align-items:center;
        margin:10px 0;
            img {
            width:40px;
            height:40px;
            margin-right:20px;
            }
    }

    .cart--item-nome {
        flex:1;
    }

    .cart--item--qtarea {
        display:inline-flex;
        background-color:#EEE;
        border-radius:10px;
        height:30px;
            button {
                border:0;
                background-color:transparent;
                font-size:17px;
                outline:0;
                cursor:pointer;
                padding:0px 10px;
                color:#333;
            }
    }

    .cart--item--qt {
        line-height: 30px;
        font-size: 12px;
        font-weight: bold;
        padding: 0px 5px;
        color:#000;
    }

    .cart--totalitem {
        padding:15px 0;
        border-top:1px solid #79b9dd;
        color:#315970;
        display:flex;
        justify-content: space-between;
        font-size:15px;
            span:first-child {
                font-weight: bold;
            }
    }

    .cart--totalitem.big {
        font-size:20px;
        color:#000;
        font-weight: bold;
    }

    .cart--finalizar {
        padding:20px 30px;
        border-radius:20px;
        background-color:#48d05f;
        color:#FFF;
        cursor:pointer;
        text-align:center;
        margin-top:20px;
        border:2px solid #63f77c;
        transition: all ease .2s;
            :hover {
            background-color:#35af4a;
            }
    }



`;