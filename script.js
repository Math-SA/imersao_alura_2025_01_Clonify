const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function renderArtistInfo(artist){
    
    const artistCard = document.createElement("div");
    artistCard.classList.add("artist-card");
    const cardImg = document.createElement("div");
    cardImg.classList.add("card-img");
    
    const img = document.createElement("img");
    img.classList.add("artist-img");
    img.src = artist.urlImg;
    
    const play = document.createElement("div");
    play.classList.add("play");
    
    const playSpan = document.createElement("span");
    
    playSpan.classList.add(["fa", "fa-solid", "fa-play"]);
    const cardText = document.createElement("div");
    cardText.classList.add("card-text");
    const link = document.createElement("a");
    const nameSpan = document.createElement("span");
    const categorySpan = document.createElement("span");
    link.setAttribute("title", artist.name);
    link.setAttribute("href","");
    link.classList.add("vst");
    nameSpan.innerText = artist.name;
    nameSpan.classList.add("artist-name");
    categorySpan.innerText = artist.genre;
    categorySpan.classList.add("artist-category");

    artistCard.appendChild(cardImg);
    artistCard.appendChild(cardText);

    cardImg.appendChild(img);
    cardImg.appendChild(play);
    play.appendChild(playSpan);
    
    cardText.appendChild(link);
    cardText.appendChild(nameSpan);
    cardText.appendChild(categorySpan);

    return artistCard;
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const container = resultArtist.getElementsByClassName("grid-container")[0];
    container.replaceChildren();

    result.forEach(element => {
        container.appendChild(renderArtistInfo(element));
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        return
    }
    
    requestApi(searchTerm);
})