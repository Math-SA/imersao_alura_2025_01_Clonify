import React from "react";
import Recommender from "../Recommender/Recommender";
import SearchResults from "../SearchResults/SearchResults";




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
                    <SearchResults searchString={searchString}></SearchResults>
                </div>
            )
    }

}


export default Main;