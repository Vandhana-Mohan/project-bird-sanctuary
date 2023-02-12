import "./Cart.css";

const Cart = ({ adoptedBirds, discount, total }) => {
  let discountPercentage = discount ? 10 : 0;
  let discountedPrice = total - (total * discountPercentage) / 100;

  return (
    <aside className="Cart">
      <h1>Cart</h1>
      <div>
        <h4>Discount: {discountPercentage}%</h4>
        <h4>Total: ${discountedPrice.toFixed(2)} </h4>
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
        <li></li>
      </ul>
    </aside>
  );
};
export default Cart;
