import React from "react";
import birds from "./data/birds";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Components/Header";
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Footer from "./Components/Footer";
import { v1 as generateUniqueID } from "uuid";
import "./App.css";

function App() {
  const [adoptedBirds, setAdoptedBirds] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  const handleAdopt = (bird) => {
    setAdoptedBirds([...adoptedBirds, { ...bird, id: generateUniqueID() }]);
    setTotal(total + bird.amount);
  };
  
  // bird-portfolio - checkout - without this comment cypress will fail
  const handleDelete = (id) => {
    const bird = adoptedBirds.find((bird) => bird.id === id);
    const newAdoptedBirds = adoptedBirds.filter((bird) => bird.id !== id);
    setAdoptedBirds(newAdoptedBirds);
    setTotal(total - bird.amount);
  };

  useEffect(() => {
    if (adoptedBirds.length >= 3) {
      setDiscount(true);
    } else {
      setDiscount(false);
    }
  }, [adoptedBirds.length]);

  const handleReset = () => {
    setAdoptedBirds([]);
    setTotal(0);
    setDiscount(0);
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
