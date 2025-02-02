import React from "react";
import './SideBarAction.css';

const SideBarAction = ({title, subtitle, button, action}) => {
    return (
        <React.Fragment>
            <section className="sidebar-action">
                <span className="sidebar-action__title">{title}</span>
                <span className="sidebar-action__subtitle">{subtitle}</span>
                <button className="sidebar-action__button" onClick={action}>
                    <span>{button}</span>
                </button>
            </section>
        </React.Fragment>
    )
}


export default SideBarAction