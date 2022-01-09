import footer from 'assets/img/footer.svg'
import './styles.css';

export function Footer() {
    return (
        <footer className = "footer">
            <img src = {footer} alt = "icon-footer" className = "footer__img"/>
        </footer>
    )
}
