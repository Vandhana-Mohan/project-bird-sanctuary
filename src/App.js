import React from "react";
import birds from "./data/birds"

import Header from "./Components/Header";
import BirdCard from "./Components/BirdCard";
import Footer from "./Components/Footer"
import "./App.css"

function App () {
  return (
    <div>
      <Header />
      <div className="card">
        {birds.map((bird) => (
          <BirdCard bird={bird} key={bird.id} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;