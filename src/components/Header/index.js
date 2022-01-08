import header from 'assets/img/header.svg';
import { Navbar } from './Navbar';

import './styles.css';
export function Header() {
    
    return(
        <>
            <Navbar />
            <section className = "section">
                <
                    img src = { header }
                    alt = "icon-header"
                    className = "section__img"
                />
                <div className = "section__letters">
                    <span className = "section__span">A man can't have enough basement. sway </span>
                </div>
            </section>
        </>
    ) 
}
