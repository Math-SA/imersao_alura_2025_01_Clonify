import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import './ArtistCard.css';

const ArtistCard = ({ artist }) => {
    return (

        <a title={artist.name} className="vst" href="">
            <div className="artist-card">
                <div className="card-img">
                    <img className="artist-img" src={artist.urlImg} />
                    <div className="play">
                        <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                    </div>
                </div>
                <div className="card-text">

                    <span className="artist-name">{artist.name}</span>
                    <span className="artist-categorie">{artist.genre}</span>

                </div>
            </div>
        </a>

    )
}

export default ArtistCard;