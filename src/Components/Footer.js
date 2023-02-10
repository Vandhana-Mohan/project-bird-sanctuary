import "./Footer.css"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous"></link>

const Footer = () => {
    return(
        <footer>
            <nav>
                <ul class="social_links">
                    <a class="footer__facebook" href="https://facebook.com/" target="_blank"><i class="fab fa-facebook-square" alt="Facebook"></i></a>
                    <a class="footer__instagram" href="https://instagram.com/" target="_blank"><i class="fab fa-instagram" alt="Instagram"></i></a>
                    <a class="footer__twitter" href="https://twitter.com/" target="_blank"><i class="fab fa-twitter-square" alt="Twitter"></i></a>
                    <a class="footer__youtube" href="https://youtube.com/" target="_blank"><i class="fab fa-youtube" alt="YouTube"></i></a>
                    <a class="footer__github" href="https://github.com/Vandhana-Mohan" target="_blank"><i class="fab fa-github" alt="GitHub"></i></a>
                    <a class="footer__github" href="https://www.linkedin.com/in/vandhanamohan/" target="_blank"><i class="fab fa-linkedin" alt="linkedin"></i></a>

                </ul>
            </nav>
            <p>Copyright © 2023 <a href="https://github.com/Vandhana-Mohan" target="_blank">Vandhana Mohan.</a> All rights reserved.</p>
        </footer>
    )
}
export default Footer

