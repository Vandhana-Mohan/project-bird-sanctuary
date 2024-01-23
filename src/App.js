import React from "react";
import birds from "./data/birds";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Footer from "./Components/Footer";

import "./App.css";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./Components/Firebase/Firebase";

function App() {
  const [adoptedBirds, setAdoptedBirds] = useState([]);
  let total = 0;
  let discount = adoptedBirds.length >= 3 ? 0.1 : 0;

  useEffect(() => {
    getFireBirds();
  }, []);

  for (let i = 0; i < adoptedBirds.length; i++) {
    total += adoptedBirds[i].amount;
  }

  const handleAdopt = (bird) => {
    // Add a new document with a generated id.
    const docRef = addDoc(collection(db, "cart"), {
      birdName: bird.name,
      amount: bird.amount,
      timestamp: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
    getFireBirds();
  };

  async function getFireBirds() {
    let placeholder = [];
    const querySnapshot = await getDocs(
      query(collection(db, "cart"), orderBy("timestamp", "asc"))
    );
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      placeholder.push({ data: data, id: doc.id });
    });
    setAdoptedBirds(placeholder);
  }

  async function handleDelete(id) {
    const newAdoptedBirds = adoptedBirds.filter((bird) => bird.id !== id);
    setAdoptedBirds(newAdoptedBirds);
    await deleteDoc(doc(db, "cart", id));
  }

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
