import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import firebaseApp from '../corousal/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!searchTerm) {
      toast.error('Please enter a search term');
      return;
    }

    setIsSearching(true);
    const database = getDatabase(firebaseApp);
    const itemsRef = ref(database, 'items'); // Adjust the database path as per your structure
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const results = Object.values(data).filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
      setIsSearching(false);
    });
  };

  return (
    <div>
      <h1>Search</h1>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        placeholder="Enter search term..." 
      />
      <button onClick={handleSearch}>Search</button>
      
      {/* Display search results */}
      <div>
        {isSearching && <p>Searching...</p>}
        {!isSearching && searchResults.length === 0 && <p>No results found</p>}
        {searchResults.map((result, index) => (
          <div key={index}>
            {/* Render your search results here */}
            <p>{result.name}</p> {/* Assuming 'name' property for demonstration */}
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Search;
