const BirdCard = (props) => {
    return (
        <div>
            <h2>Bird</h2>
            <h4>Price : {props.Price} </h4>
            <span>
                <img src="" alt="" />
            </span>
            <button>Adopt</button>
        </div>
    )
}

export default BirdCard;