import React, { useState, useEffect } from "react";
import './SearchResults.css';
import ArtistCard from "../ArtistCard/ArtistCard";

const SearchResults = ({ searchString }) => {
    const [artistList, setArtistList] = useState([]);

    useEffect(() => {
        if (searchString) { // Verifica se searchString não está vazio
            fetch(`http://localhost:3210/artists?name_like=${searchString}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setArtistList(data);
                })
                .catch((error) => console.error("Erro ao buscar artistas:", error));
        } else {
            setArtistList([]); // Limpa a lista se searchString estiver vazio
        }
    }, [searchString]); // Adiciona searchString como dependência

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
    );
}

export default SearchResults;
