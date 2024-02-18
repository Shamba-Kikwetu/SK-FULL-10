import React, { useState } from 'react';
import search from "../../../assets/icons/search.svg"

const SearchBar = ({ onSearch, isLoggedIn }) => {
    const [inputText, setInputText] = useState('');

    const handleSearch = () => {
        if (isLoggedIn) {
            onSearch(inputText);
        } else {
            console.log("Please log in before searching.");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div>
            <input
                className={"thebar"}
                type="text"
                placeholder="Enter Title Deed No...................................."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className={"buttons"} onClick={handleSearch}><img src={search} alt="Search" /></button>
        </div>
    );
};

export default SearchBar;
