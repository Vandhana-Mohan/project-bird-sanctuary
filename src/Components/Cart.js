import "./Cart.css";
import bonusItems from "../data/bonusItems";
import { v1 as generateUniqueID } from "uuid";

const Cart = ({ adoptedBirds, discount, total, onDelete }) => {
  const bonus = [...bonusItems];
  let discountPercentage = discount ? 10 : 0;
  let discountedPrice = total - (total * discountPercentage) / 100;
  //   bird-portfolio - checkout - without this comment cypress will fail
  const getBonuses = (total) => {
    switch (true) {
      case total >= 100 && total < 300:
        return [bonus[0]];
      case total >= 300 && total < 500:
        return [bonus[0], bonus[1]];
      case total >= 500 && total < 1000:
        return [bonus[0], bonus[1], bonus[2]];
      case total >= 1000:
        return [bonus[0], bonus[1], bonus[2], bonus[3]];
      default:
        return [];
    }
  };
  const bonuses = getBonuses(total);
  
  return (
    <aside className="Cart">
      <h1>Cart</h1>
      <div>
        <h3>Discount: {discountPercentage}%</h3>
        <h4>Total: ${discountedPrice} </h4>
      </div>
      <ol>
        {adoptedBirds.map((bird, index) => (
          <li key={generateUniqueID()}>
            {bird.name} ${bird.amount}
            <button onClick={() => onDelete(bird.id)}>
              <span>Delete</span>
              <span className="x">X</span>
            </button>
          </li>
        ))}
      </ol>
      {bonuses.length >= 1 ? (
        <div>
            <p> Your donations have qualified you for the following items</p>
            <ul>
                {bonuses.map((bonus, index) => (
                <li key={generateUniqueID()}>{bonus}</li>
                ))}
            </ul>
        </div>
      ):null}
    </aside>
  );
};
export default Cart;
