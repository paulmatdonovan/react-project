import "./App.css";
// import Header from "./Header";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Users from "./Users";
import Cart from "./Cart";

function App() {

  return (
    <>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Home />}>
          <Route path=":productId" element={<Home />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="/cart" element={<Cart />} />
      </Routes >


    </>
  );
}

export default App;