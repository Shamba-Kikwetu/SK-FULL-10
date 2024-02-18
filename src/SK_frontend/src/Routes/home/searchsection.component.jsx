import React from "react";
import SearchBar from "../../Components/SearchBar/thebar/input.component";
import "./searchsection.style.scss"


function Search () {
    return(
        <div className={"search"}>
            <h1 className={"search-text"}>Get to Access the land</h1>
            <p className={"searchp"}>Know the authenticity of the land by keying in the appropriate title dead number .Pay as little as ksh.450/=, to access full details navigate to the lands detail page by clicking <link/>here</p>
            <SearchBar/>
        </div>
    );

}

export default Search;