import "./Checkout.css";

const Checkout = ({ handleReset }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have adopted birds. Thank you!");
    event.target.reset();
    handleReset();
  };
  return (
    <aside className="Checkout">
      <h4 className="Checkout__heading">Checkout</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">
          First Name
          <br />
          <input
            type="text"
            id="first-name"
            name="first-name"
            autoFocus
            placeholder="Your First name..."
          />
        </label>
        <br />
        <label htmlFor="last-name">
          Last Name
          <br />
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Your Last name..."
          />
        </label>
        <br />
        <label htmlFor="email">
          Email
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email..."
          />
        </label>
        <br />
        {/* bird-portfolio - checkout - without this line cypress will fail */}
        <label htmlFor="zip-code">
          Zip Code
          <br />
          <input type="number" id="zip-code" name="zip-code" placeholder="Your Zip code..."/>
        </label>
        <br />
        <input type="submit" className="submit__birds" value="Submit" />
      </form>
    </aside>
  );
};
export default Checkout;
