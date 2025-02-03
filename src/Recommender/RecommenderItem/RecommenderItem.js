import React from "react";
import './RecommenderItem.css';

const RecommenderItem = ({image, bgColor, title}) => {
    const style = {
        backgroundColor : bgColor
    }
    return (
        <React.Fragment>
            <a href="" className="cards">
                <div className="cards" style={style}>
                    <img src={image} className="cards__image" alt="" />
                    <span>{title}</span>
                </div>
            </a>
        </React.Fragment>
    )
}

export default RecommenderItem;



