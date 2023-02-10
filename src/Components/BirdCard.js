const BirdCard = ({ bird }) => {
    const { img, name, amount } = bird
    return (
        <main>
            <h2>{name}</h2>
            <h4>Price : {amount} </h4>
            <span>
                <img src={img} alt="bird" />
            </span>
            <button>Adopt</button>
        </main>
    )
}
export default BirdCard;
  
  