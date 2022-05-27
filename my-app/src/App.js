import "./App.css";
import React from "react";
import { Navbar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Counter } from "./components/Counter";

function App() {
  const prenda1 = {
    tipo: "campera",
    color: "rojo",
  };
  const prenda2 = {
    tipo: "campera",
    color: "rosa",
  };
  const prenda3 = {
    tipo: "campera",
    color: "verde",
  };
  const prenda4 = {
    tipo: "campera",
    color: "verde",
  };

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer
        prenda1={prenda1.tipo}
        prenda2={prenda2.tipo}
        prenda3={prenda3.tipo}
        prenda4={prenda4.tipo}
      />
      <Counter/>
    </div>
  );
}

export default App;
