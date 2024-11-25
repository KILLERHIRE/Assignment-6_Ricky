import React, { useState } from 'react';

function Search({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query); // Mengirim query ke parent (Movie)
    };

    return (
        <form onSubmit={handleSearch} className="text-center mb-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a movie..."
                className="border rounded p-2 w-3/4 max-w-md"
            />
            <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2 ml-2">
                Search
            </button>
        </form>
    );
}
export default Search;