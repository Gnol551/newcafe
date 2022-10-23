import { useState } from "react";
import { Link } from "react-router-dom";
export default function Box(props) {
    const Cards = ({ item, handleClick }) => {
        const { img, name, price, btn } = item;
    }
    const [cart, setCart] = useState([]);
   const handleClick = () => {
       alert('hello')
   }
    return (
        <div className="box">
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
            <div className="price">
            {props.price}
            </div>
            <button className="btn"  onClick={handleClick}>
            {props.btn}
            </button>
        </div>
    )
}