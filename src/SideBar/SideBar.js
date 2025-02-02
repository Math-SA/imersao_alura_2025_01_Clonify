import React from "react";
import './SideBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faGlobe, faHome, faMusic, faPlus, faSearch, faWaveSquare } from "@fortawesome/free-solid-svg-icons";


const SideBar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href="">
                        <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
                        <span>Clonify - Cloning that music platform for learning purpose</span>
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                        <span>Sua biblioteca</span>
                    </button>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </div>
                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>
                <div className="library__cookies">
                    <a href="">Cookies</a>
                </div>
                <div className="languages">
                    <button className="languages__button">
                    <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                    <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SideBar;