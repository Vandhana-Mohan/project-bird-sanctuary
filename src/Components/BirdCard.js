import "./BirdCard.css"

const BirdCard = ({ bird }) => {
    function XYZ(){
        console.log("hi")
    }
    const { img, name, amount } = bird
    return (
        <main className="birdcard">
            <h4>{name}</h4>
            <p>Price: ${amount} </p>
            <span>
                <img className="birdcard__image" src={img} alt="bird" />
            </span>
            <br></br>
            <button className="birdcard__adopt" onClick={() => XYZ()}>Adopt</button>
        </main>
    )
}
export default BirdCard;