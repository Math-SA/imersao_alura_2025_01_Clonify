import React from "react";
import './Recommender.css';
import './RecommenderItem/RecommenderItem'
import RecommenderItem from "./RecommenderItem/RecommenderItem";

const Recommender = () => {
    const imageNames = [
        '1.jpeg',
        '2.png',
        '3.jpeg',
        '4.jpeg',
        '5.jpeg',
        '6.jpeg',
        '7.jpeg',
        '8.jpeg',
        '9.jpeg',
        '10.jpeg',
        '11.jpeg',
        '12.jpeg',
        '13.jpeg',
        '14.jpeg',
        '15.jpeg'
    ];
    const images = imageNames.map(name => require(`../assets/playlist/${name}`));

    const bgColors = ["#006450", "#8400e7", "#1e3264",
        "#8c1932", "#e8115b", "#537aa1", "#8e66ac",
        "#148a08", "#1e3264", "#e91429", "#503750",
        "#d84000", "#ba5d07", "#001e50", "#3c1e50"
    ]

    const titles = [
        "Boas Festas",
        "Feitos para você",
        "Lançamentos",
        "Creators",
        "Para treinar",
        "Podcasts",
        "Sertanejo",
        "Samba e pagode",
        "Funk",
        "MPB",
        "Rock",
        "Hip Hop",
        "Indie",
        "Relax",
        "Música Latina"
    ];

    let items = titles.map((title, index) => 
        <RecommenderItem image={images[index]}
            title={title}
            bgColor={bgColors[index]} 
            key={index}
            />
    ) 


    return (
        <div className="playlist-container">
            <div id="result-playlists">
                <div className="playlist">
                    <h1 id="greeting">Boas vindas</h1>
                    <h2 className="session">Navegar por todas as seções</h2>
                </div>

                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            
                            {items}

                        </section>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Recommender;