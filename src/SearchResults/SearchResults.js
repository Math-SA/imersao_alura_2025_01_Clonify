import react from "react";
import './SearchResults.css';
import ArtistCard from "../ArtistCard/ArtistCard";
import { useState, useEffect } from "react";


const SearchResults = ({ searchString }) => {
    const [artistList, setArtistList] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3210/artists?name_like=${searchString}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setArtistList(data);
            });
    }, []);

    let result = artistList.map(artist =>
        <ArtistCard artist={artist} key={artist.id}></ArtistCard>
    );
    return (
        <div id="result-artist">
            <div className="grid-container">
                {artistList.length > 0 && result}                
                {artistList.length === 0 && <span className="card-text artist-name artist-card">Nenhum artista encontrado.</span>}
            </div>
        </div>
    )
}

export default SearchResults;