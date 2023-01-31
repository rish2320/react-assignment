import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayCubes from './components/DisplayCubes';
import DisplayPersonList from './components/DisplayPeronList';
import DisplayPets from './components/DisplayPets';

// const fruits = ["Apple", "Banana", "Orange", "Mango"];

// const App = () => {
//   return (
//     <ul>
//       {fruits.slice(0, 4).map((fruit, index) => (
//         <li key={index}>{fruit}</li>
//       ))}
//     </ul>
//   );
// }

// type Person = {
//   id: number;
//   name: string;
//   age: number;
//   skill: string
// }

//const numbers = [1, 2, 3, 4, 5];

// const List : Person[] = [
  // {id: 1, name: 'Ansh', age: 22, skill: 'React'},
  // {id: 2, name: 'Jay', age: 25, skill: 'Java'},
  // {id: 3, name: 'Sara', age: 23, skill: 'Angular'}] 

// type Pet = {
//   name: string;
//   type: string;
// }

// type User = {
//   name: string;
//   pets: Pet[];
// }

// const List : User[] = [	{name:'chris', pets: [{name: 'bella', type: "dog"},
// {name: 'cocoa', type: "dog"}]},	{name:'nick',
// pets: [{name: 'hilo', type: "cat"}, {name: 'polly', type: "cat"}]} ]; 

  // const App: React.FC = () => {
  //   return (
  //     <div>
  //       <DisplayPets users = {List} />
  //     </div>
  //   );
  // };

import { useState } from "react";
import "./App.css";

function App() {
  const [isClicked, setClick] = useState(false);

  return (
    <div className={`App ${isClicked ? "original" : "change_color"}`}>
      <h1>Welcome to TQPP</h1>
      <h2>HELLO REACT</h2>
      <button onClick={() => setClick(!isClicked)}>Toggle Theme</button>
    </div>
  );
}

export default App;

