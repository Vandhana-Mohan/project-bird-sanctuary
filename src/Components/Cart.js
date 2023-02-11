import "./Cart.css"

const Cart = () => {
    return(
        <aside className="Cart">
            <h3>Cart</h3>
            <h3>Discount: {10} %</h3>
            <h4>Total: $ {20}</h4>
            <ol>
                {adoptedBirds.map((bird, index) => (
                    <li key={index}>{bird}</li>
                ))}
            </ol>
            <p> Your donations have qualified you for the following items</p>
            <ul>
                <li></li>
            </ul>
            <button className="birds">Birds</button>
        </aside>
    )
}
export default Cart