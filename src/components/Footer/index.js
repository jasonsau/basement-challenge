import footer from 'assets/img/footer.svg'
import './styles.css';

export function Footer() {
    return (
        <footer class = "footer">
            <img src = {footer} alt = "icon-footer" className = "footer__img"/>
        </footer>
    )
}
