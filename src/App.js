import React from "react";
import birds from "./data/birds";
import { useState } from "react";
import Header from "./Components/Header";
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Footer from "./Components/Footer";
import { v1 as generateUniqueID } from "uuid";
import "./App.css";

function App() {
  const [adoptedBirds, setAdoptedBirds] = useState([]);
  let total = 0
  let discount = (adoptedBirds.length >= 3 ? 0.1 : 0 )
  
  for(let i = 0; i < adoptedBirds.length; i++){
    total += adoptedBirds[i].amount
  }

  const handleAdopt = (bird) => {
    setAdoptedBirds([...adoptedBirds, { ...bird, id: generateUniqueID() }]);
  };

  const handleDelete = (id) => {
    const newAdoptedBirds = adoptedBirds.filter((bird) => bird.id !== id);
    setAdoptedBirds(newAdoptedBirds);
  };

  // useEffect(() => {
    // if (adoptedBirds.length >= 2) {
    //   setDiscount(true);
    // } else {
    //   setDiscount(false);
    // }
  // }, [adoptedBirds.length]);

  const handleReset = () => {
    setAdoptedBirds([]);
  };

  return (
    <div>
      <Header />
      <div className="card">
        <div className="cart-container">
        <Cart
            adoptedBirds={adoptedBirds}
            discount={discount}
            total={total}
            onDelete={handleDelete}
          />
          <Checkout handleReset={handleReset} />
        </div>
        <div className="bird-cards">
          {birds.map((bird) => (
            <BirdCard bird={bird} key={bird.id} onAdopt={handleAdopt} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
