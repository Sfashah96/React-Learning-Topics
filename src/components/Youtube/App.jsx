import React, { useState } from 'react';
import VideoList from './VideoList';
import './App.css'; // Optional: Add some styling

const App = () => {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className="app">
            <h1>My YouTube App</h1>
            <input
                type="text"
                placeholder="Filter videos"
                value={filter}
                onChange={handleFilterChange}
                className="filter-input"
            />
            <VideoList filter={filter} />
        </div>
    );
};

export default App;
