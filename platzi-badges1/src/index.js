// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
// import Badge from "./components/Badge";
import BadgeNew from "./pages/BadgeNew";

import Badges from "./pages/Badges";

// const element = <h1>Hello, Platzi Badges!</h1>;
// const element = React.createElement(
//   "a",
//   { href: "https://platzi.com" },
//   "Ir a platzi."
// ); //(tipo de elemento, cuales son los atributos, el children)
// const name = "Angela";
// const sum = () => 3 + 3;
// // const element = React.createElement("h1", {}, `Hola, soy ${name}`);
// // const jsx = <h1>Hola, soy {sum()}</h1>;

// const jsx = (
//   <div>
//     <h1>Hola, soy Goku jeje</h1>
//     <p>Soy ingeniero frontend.</p>
//   </div>
// );
const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(
//   <Badge
//     firstName="Luis"
//     lastName="Maceda"
//     avatarUrl="https://www.gravatar.com/avatar?d=identicon"
//     jobTitle="Frontend Engineer"
//     twitter="lmartin_maceda"
//   />,
//   container
// );
ReactDOM.render(<Badges />, container);
