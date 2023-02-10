import "./Header.css"

const Header = () => {
    return(
        <header className="style__header">
            <nav>
                <h1> Bird Sanctuary Project</h1>
                <cite> By Vandhana Mohan</cite>
                <ul>
                    <li>
                        <button>Home</button>
                    </li>
                    <li>
                        <button>About Us</button>
                    </li>
                    <li>
                        <button>Contact Us</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header