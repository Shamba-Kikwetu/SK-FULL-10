import React from 'react';

const SearchResult = ({ result }) => {
    const mockData = [
        { landNumber: 1, location: "City A", landSize: "10 acres" },
        { landNumber: 2, location: "City B", landSize: "8 acres" },
        { landNumber: 3, location: "City C", landSize: "15 acres" }
    ];

    const foundResult = mockData.find(data => data.landNumber === result);

    return (
        <div>
            <h3>Search Result</h3>
            {foundResult ? (
                <div>
                    <p>Land Number: {foundResult.landNumber}</p>
                    <p>Location: {foundResult.location}</p>
                    <p>Land Size: {foundResult.landSize}</p>
                </div>
            ) : (
                <p>No result found.</p>
            )}
        </div>
    );
};

export default SearchResult;
