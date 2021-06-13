import React, { useEffect, useState } from "react";

import "./App.scss";
import About from "./components/About";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import Spinner from './components/Spinner/Spinner'
// import About f

const Home = ({ appState }) => {
  return (
    <div>
      <h1>Home {appState}</h1>
     
    </div>
  );
};

export default function App() {
  const [currentItemId, setcurrentItemId] = useState("");
  const [currentItem, setCurrentItem] = useState({
    name: "",
    type: "",
    series: "",
    rarity: "",
    images: { icon: "", background: "" },
    description: "",
  });

  const [appState, setAppState] = useState("party");
  useEffect(() => {
    console.log(`%c${currentItem}`, "color:green");
    console.log(currentItem);
  }, [currentItem]);
  
  return (
    <div>
      <Router>
        {/* <h1>hello world</h1> */}
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Home appState={appState} />}
          />
          <Route path="/About" exact component={About} />
          <Route
            path="/Shop"
            exact
            component={() => (
              <Shop
                setcurrentItemId={setcurrentItemId}
                currentItemId={currentItemId}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
              />
            )}
          />
          <Route
            path="/Shop/:id"
            
            component={() => <ItemDetail currentItem={currentItem} />}
          />
        </Switch>
        <Nav />
      </Router>
    </div>
  );
}
