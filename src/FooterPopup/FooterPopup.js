import React, { useState } from "react";
import './FooterPopup.css';

const FooterPopup = ({ message, button, cancel, onClose }) => {
    return (
        <>

            <footer className="footer" role="alert" aria-live="assertive">
                <span className="footer__disclaimer">{message}</span>
                <div className="footer_actions">
                    <button className="footer__button">
                        <span>{button}</span>
                    </button>
                    <button className="footer__button" onClick={onClose}>
                        <span>{cancel}</span>
                    </button>
                </div>
            </footer>

        </>
    );
};

export default FooterPopup;