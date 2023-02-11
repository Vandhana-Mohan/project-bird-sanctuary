import React from "react";
import birds from "./data/birds"

import Header from "./Components/Header";
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart"
import Checkout from "./Components/Checkout";
import Footer from "./Components/Footer"
import "./App.css"

function App() {
  return (
    <div>
      <Header />
      <div className="card">
      <div className="cart-container">
          {/* <Cart /> */}
          <Checkout />
        </div>
        <div className="bird-cards">
          {birds.map(bird => (
            <BirdCard bird={bird} key={bird.id} />
          ))}
        </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;