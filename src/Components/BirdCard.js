import "./BirdCard.css"

const BirdCard = ({ bird, onAdopt }) => {
    const { img, name, amount } = bird
    return (
        <main className="birds">
            <h4>{name}</h4>
            <p>Price: ${amount} </p>
            <span>
                <img className="birds__image" src={img} alt={name} />
            </span>
            <br></br>
            <button className="birds__adopt" onClick={() => onAdopt(bird)}>Adopt</button>
        </main>
    )
}
export default BirdCard;