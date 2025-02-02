import {react, useState} from "react";
import './Header.css';
import leftArrow from '../assets/icons/small-left.png';
import rightArrow from '../assets/icons/small-right.png';
import search from "../assets/icons/search.png";

const Header = ({inputHandler}) => {

    return (
        <nav className="header__navigation">
                <div className="navigation">
                    <button className="arrow-left">
                        <img src={leftArrow}/>
                    </button>
                    <button className="arrow-right">
                        <img src={rightArrow}/>
                    </button>
                </div>
                <div className="header__search">
                    <img src={search} />
                    <input id="search-input" 
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