import './App.css';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/sections/Home';
import Navbar from './components/Navbar';
import Favorites from './components/sections/Favorites';
import WatchPage from './components/sections/WatchPage';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const movieData = async (movie) => {

    try {
      const BASE_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=dcbc1f23&t=${movie}&plot=full`;

      const response = await axios.get(BASE_URL);
      console.log("Response Status:", response.status);
      console.log("Response Data:", response.data);
      setData(response.data);
      setLoading(false);

    } catch (error) {
      console.error("Error occurred during API call:", error);
      setError(error);
      setLoading(false);
    }
  };

  const handleSearchSubmit = () => {
    setLoading(true);
    movieData(search);
  };

  useEffect(() => {
    movieData("Kung Fu Panda")
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} onSearchSubmit={handleSearchSubmit} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path='/watch' element={<WatchPage movies={data} />}/>
      </Routes>
    </div>
  );
}

export default App;
