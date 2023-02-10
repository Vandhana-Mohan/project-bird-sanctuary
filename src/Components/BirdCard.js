import "./BirdCard.css"

const BirdCard = ({ bird }) => {
    const { img, name, amount } = bird
    return (
        <main>
            <h4>{name}</h4>
            <p>Price: ${amount} </p>
            <span>
                <img src={img} alt="bird" />
            </span>
            <br></br>
            <button>ADOPT</button>
        </main>
    )
}
export default BirdCard;