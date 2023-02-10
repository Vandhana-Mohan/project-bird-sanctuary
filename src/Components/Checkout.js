import "./Checkout.css"

const Checkout = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const result = window.confirm("You have adopted birds. Thank you!\n\nClick 'Close' to close this alert.");
        if (result) {
            event.target.reset();
        }
    }
    return(
        <aside className="Checkout">
            <h1 className="Checkout__title">Checkout</h1>
            <form onSubmit={handleSubmit} className="Checkout__form">
                <label htmlFor="first-name">First Name
                <br/>
                <input 
                    type="text"
                    id ="first-name"
                    name="first-name"
                    autoFocus
                    placeholder="Your First name..."
                />
                </label>
                <br/>
                <label htmlFor="last-name">Last Name
                <br/>
                <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    placeholder="Your Last name..."
                />
                </label>
                <br/>
                <label htmlFor="email">Email
                <br/>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email..."
                />
                </label>
                <br/>
                <label htmlFor="zip-code">Zip Code
                <br/>
                <input
                    type="number"
                    id="zip-code"
                    name="zip-code"
                />
                </label>
                <br/>
                <button type="submit" className="birds">Submit</button>
                <button type="reset">Reset</button>
            </form>
        </aside>
    )
}

export default Checkout