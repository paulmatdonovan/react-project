import "./App.css";
// import Header from "./Header";
import Techcard from "./Techcard";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Usercard from "./Usercard";
import NavBar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Users from "./Users";

function App() {
  const [username, setUsername] = useState("");
  const [accountType, setAccountType] = useState('');
  const [users, setUsers] = useState([]);



  // useEffect(() => {
  //   fetch("http://localhost:5500/db/db.json")
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setTechProducts(data.products);
  //     });
  //   console.log(techProducts)
  // }, []);

  // const techCards = techProducts.map((techObj) => {
  //   return (
  //     <Techcard
  //       key={techObj.id}
  //       name={techObj.name}
  //       image={techObj.image}
  //       attributes={techObj.attributes}
  //       price={techObj.price}
  //     />
  //   );
  // });



  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>

      </Switch>


    </>
  );
}

export default App;