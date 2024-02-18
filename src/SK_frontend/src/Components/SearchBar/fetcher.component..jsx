// MainComponent.js

import React, { useState } from 'react';
import SearchBar from './thebar/input.component';
import SearchResult from './display/display.component';


const MainComponent = () => {
    const [searchResult, setSearchResult] = useState(null);

    const handleSearch = (inputNumber) => {
        // Simulating API call
        fetch(`backend-url?number=${inputNumber}`)
            .then(response => response.json())
            .then(data => {
                setSearchResult(data);
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred while processing your request.");
            });
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            {searchResult && <SearchResult result={searchResult} />}
        </div>
    );
};

export default MainComponent;
