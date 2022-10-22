import { Link } from "react-router-dom";
export default function Box(props) {
    return (
        <div className="box">
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
            <div className="price">
            {props.price}
            </div>
            <a href="#" className="btn">
            {props.btn}
            </a>
        </div>
    )
}