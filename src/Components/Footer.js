import "./Footer.css"

const Footer = () => {
    return(
        <footer>
            <nav>
                <ul className="social_links">
                    <li>
                        <a className="footer__facebook" href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-square" alt="Facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a className="footer__instagram" href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram" alt="Instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a className="footer__twitter" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter-square" alt="Twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a className="footer__youtube" href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube" alt="YouTube"></i>
                        </a>
                    </li>
                    <li>
                        <a className="footer__github" href="https://github.com/Vandhana-Mohan" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github" alt="GitHub"></i>
                        </a>
                    </li>
                    <li>
                        <a className="footer__linkedin" href="https://www.linkedin.com/in/vandhanamohan/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin" alt="LinkedIn"></i>
                        </a>
                    </li>
                </ul>
            </nav>
            <p>Copyright © 2023 <a href="https://github.com/Vandhana-Mohan" target="_blank" rel="noopener noreferrer">Vandhana Mohan</a>. All rights reserved.</p>
        </footer>
    )
}

export default Footer;
