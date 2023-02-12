import "./Cart.css"

const Cart = ({ adoptedBirds, discount, total}) => {
    let discountedPrice = total - (total * discount) / 100;
    
    return(
        <aside className="Cart">
            <h3>Cart</h3>
            <div>
                <h3>Discount: {discount}%</h3>
                <h4>Total: ${discountedPrice} </h4>
            </div>
            <ol>
                {adoptedBirds.map((bird, index) => (
                    <li key={index}>{bird.name} ${bird.amount}</li>
                ))}
            </ol>
            <p> Your donations have qualified you for the following items</p>
            <ul>
                <li></li>
            </ul>
        </aside>
    )
}
export default Cart
