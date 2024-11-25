import React, { useState } from "react";

const Header = ({ title, onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
        setQuery("");
    };

    return (
        <nav className="navbar navbar-dark bg-dark px-4">
            <span className="navbar-brand mb-0 h1">{title}</span>
            <form className="d-flex" onSubmit={handleSearch}>
                <input
                    type="text"
                    className="form-control me-2"
                    placeholder=""
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                </button>
            </form>
        </nav>
    );
};

export default Header;