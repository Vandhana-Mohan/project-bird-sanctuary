import "./BirdCard.css"

const BirdCard = ({ bird }) => {
    function XYZ(){
        console.log("hi")
    }
    const { img, name, amount } = bird
    return (
        <main className="birds">
            <h4>{name}</h4>
            <p>Price: ${amount} </p>
            <span>
                <img className="birds__image" src={img} alt="bird" />
            </span>
            <br></br>
            <button className="birds__adopt" onClick={() => XYZ()}>Adopt</button>
        </main>
    )
}
export default BirdCard;