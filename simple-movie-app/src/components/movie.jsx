import React, { useState, useEffect } from 'react';
import Search from './search';


export default function Movie() {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const movieQuery = ['batman', 'superman', 'iron man', 'harry potter', 'frozen', 'star wars', 'transformers', 'spider man'];

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true);
            setError(null);

            const searchQuery = searchTerm || movieQuery[Math.floor(Math.random() * movieQuery.length)];
            try {
                const response = await fetch(`http://www.omdbapi.com/?apikey=7d3ac1ea&s=${searchQuery}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch movie data');
                }
                const data = await response.json();
                setMovie(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [searchTerm]);

    const handleSearch = (query) => {
        setSearchTerm(query);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!movie || !movie.Search) return <p>No movies found</p>;

    return (
        <div>
            <h1 className="text-center text-2xl font-bold my-4">Movie Search</h1>

            {/* Komponen Search */}
            <Search onSearch={handleSearch} />

            {/* Movie List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                {movie.Search.map((movie) => (
                    <div key={movie.imdbID} className="bg-white rounded-lg shadow-md p-4">
                        <div className="h-24">
                            <h2 className="text-lg font-semibold mb-2">{movie.Title}</h2>
                            <p><strong>Year:</strong> {movie.Year || 'N/A'}</p>
                        </div>
                        {movie.Poster !== "N/A" ? (
                            <img src={movie.Poster} alt={`${movie.Title} poster`} className="w-full rounded-lg mt-3 h-80" />
                        ) : (
                            <p className="text-gray-500 mt-3">No poster available</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
// 7d3ac1ea