import "./App.css";
import React from "react";
import { Navbar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Counter } from "./components/Counter";
import { PokeApi } from "./components/PokeApi/PokeApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter className="App">
      <Navbar />

      <Routes>

        <Route path='/' element={<ItemListContainer/>} />
        
        <Route path='/PokeApi' element={<PokeApi/>}/>
        <Route path='/Counter' element={<Counter/>}/>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
