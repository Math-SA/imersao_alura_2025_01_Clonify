import {React} from "react";
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = ({inputHandler}) => {

    return (
        <nav className="header__navigation">
                <div className="navigation">
                    <button className="arrow-left">
                        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                    </button>
                    <button className="arrow-right">
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
                <div className="header__search">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    <input id="search-input" 
                        aria-label="Search"
                        onChange={inputHandler}
                        maxLength="800" autoCorrect="off" autoCapitalize="off" spellCheck="false"
                        placeholder="O que você quer ouvir?" />
                </div>
                <div className="header__login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>
        </nav>
    )
}

export default Header;