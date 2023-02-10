import React from "react";
import birds from "./data/birds"
import BirdCard from "./Components/BirdCard.js";
import "./App.css"

function App () {
  return (
    <div>
      <header className="style__title">
        <h1> Bird Sanctuary Project</h1>
        <cite> By Vandhana Mohan</cite>
      </header>
      
      <div className="card">
        {birds.map((bird) => (
          <BirdCard bird={bird} key={bird.id} />
        ))}
      </div>
    </div>
  );
};

export default App;