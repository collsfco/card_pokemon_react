import React from "react";

export default function Card(props) {
  return (
    <div className="Card">
      <div>{/* <p>Hola</p> */}</div>
      <div>
        <img src={props.img} />
        <p>{props.name}</p>
        <p> {props.hp}</p>
        <p> {props.experience} exp</p>
      </div>
      <div>
        <p>{props.attack}K</p>
        <p> Ataque</p>
      </div>
      <div>
        <p>{props.special_attack}K</p>
        <p>Ataque Especial</p>
      </div>
      <div>
        <p>{props.defense}K</p>
        <p> Defensa</p>
      </div>
      <div>
        <button onClick={props.fun}>Get a new Pokemon</button>
      </div>
    </div>
  );
}
