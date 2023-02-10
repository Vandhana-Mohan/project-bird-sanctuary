import React from "react";
import birds from "./data/birds"
import BirdCard from "./Components/BirdCard.js";

function App () {
  return (
    <div>
      <h1>Bird Sanctuary</h1>
      {birds.map((bird) => (
        <BirdCard bird={bird} key={bird.id} />
      ))}
    </div>
  );
};

export default App;