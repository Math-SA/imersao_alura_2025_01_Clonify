import react from "react";
import Recommender from "../Recommender/Recommender";
import SearchResults from "../SearchResults/SearchResults";
import { useState, useEffect } from "react";



const Main = ({ searchString }) => {

    if (searchString == '') {
        return (
            <div className="main-container">
                <Recommender></Recommender>
            </div>
        )
    } else {
            return (
                <div className="main-container">
                    <SearchResults searchString={searchString} key={searchString.length}></SearchResults>
                </div>
            )
    }

}


export default Main;