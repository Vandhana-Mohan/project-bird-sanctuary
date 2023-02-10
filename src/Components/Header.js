import "./Header.css"

const Header = () => {
    return(
        <header className="style__header">
            <nav className="style__header__nav">
                <h1 className="style__header__title"> B i r d - S a n c t u a r y</h1>
                <ul className="style__header__ul">
                    <li className="style__header__li">
                        <button className="style__header__buttons">Home</button>
                    </li>
                    <li className="style__header__li">
                        <button className="style__header__buttons">About Us</button>
                    </li>
                    <li className="style__header__li">
                        <button className="style__header__buttons">Contact Us</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header