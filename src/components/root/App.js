import React from "react";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import Navi from "../navi/Navi";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <Container>
      <Navi /> {/* Navi bileşeni burada çağrılıyor */}
      <Routes>
        <Route path="/" exact Component={Dashboard}></Route>
        <Route path="/products" exact Component={Dashboard}></Route>
        <Route path="/cart" exact Component={CartDetail}></Route>
      </Routes>
    </Container>
  );
}

export default App;

//json-server --watch db.json
//npm start
