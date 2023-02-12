import "./Cart.css"

const Cart = ({ adoptedBirds }) => {
    return(
        <aside className="Cart">
            <h3>Cart</h3>
            <h3>Discount: {20} %</h3>
            <h4>Total: $ {10}</h4>
            <ol>
                {adoptedBirds.map((bird, index) => (
                    <li key={index}>{bird}</li>
                ))}
            </ol>
            <p> Your donations have qualified you for the following items</p>
            <ul>
                <li></li>
            </ul>
            {/* <button className="birds">Birds</button> */}
        </aside>
    )
}
export default Cart
