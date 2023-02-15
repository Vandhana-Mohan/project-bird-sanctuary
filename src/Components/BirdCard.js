import "./BirdCard.css"

const BirdCard = ({ bird, onAdopt }) => {
    const { img, name, amount } = bird
    return (
        <main className="birds">
            <h4>{name}</h4>
            <h5>Price: ${amount} </h5>
            <span>
                <img className="birds__image" src={img} alt={name} />
            </span>
            <br></br>
            <button className="birds__adopt" onClick={() => onAdopt(bird)}>Adopt</button>
            <br></br>
        </main>
    )
}
export default BirdCard;