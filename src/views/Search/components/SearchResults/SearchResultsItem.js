import {useState} from "react";
import "./style.css";
export default function SearchResultsItem (props) {

    const [completed, setCompleted] = useState(false);
    const className = completed ? 'completed' : ''
    return (
        <li className={className}>
            <strong>{props.nombre}</strong> -- {props.fecha} 
            <label><input className={className} type="checkbox" onChange={()=>setCompleted(!completed)}/>Completada</label>
            <p>{props.descr}</p>
        </li>
        );

}