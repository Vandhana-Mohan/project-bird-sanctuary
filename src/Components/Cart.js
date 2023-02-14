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
      <h1 className="Cart__heading">Cart</h1>
      <div>
        <h3 className="Cart__discount">Discount: {discountPercentage}%</h3>
        <h4 className="Cart__total">Total: ${discountedPrice} </h4>
      </div>
      <div className = "style__list__birds">
        <ol>
          {adoptedBirds.map((bird, index) => (
            <li key={generateUniqueID()}>
              <span className="list-number">{index + 1}</span>
              <span className="list-name">{bird.name}</span>
              <span className="list-price">${bird.amount}</span>
              <button className = "delete__list"onClick={() => onDelete(bird.id)}>
                <span> <i className='fas fa-backspace'></i> </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      {bonuses.length >= 1 ? (
        <div className = "style__list__bonus">
            <p> Your donations have qualified you for the following items:</p>
            <ul>
                {bonuses.map((bonus) => (
                <li key={generateUniqueID()}>{bonus}</li>
                ))}
            </ul>
        </div>
      ):null}
    </aside>
  );
};
export default Cart;
