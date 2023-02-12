import "./Cart.css";

const Cart = ({ adoptedBirds, discount, total }) => {
  let discountPercentage = discount ? 10 : 0;
  let discountedPrice = total - (total * discountPercentage) / 100;
//   bird-portfolio - checkout - without this line cypress will fail
  return (
    <aside className="Cart">
      <h1>Cart</h1>
      <div>
        <h3>Discount: {discountPercentage}%</h3>
        <h4>Total: ${discountedPrice} </h4>
      </div>
      <ol>
        {adoptedBirds.map((bird, index) => (
          <li key={index}>
            {bird.name} ${bird.amount}
          </li>
        ))}
      </ol>
      <p> Your donations have qualified you for the following items</p>
      <ul>
        <li>Stickers</li>
      </ul>
    </aside>
  );
};
export default Cart;
