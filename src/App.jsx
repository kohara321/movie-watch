import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/sections/Home';
import Navbar from './components/Navbar';
import Favorites from './components/sections/Favorites';
import WatchPage from './components/sections/WatchPage';

function App() {

  const favoriteMovies = [
    { id: 1, title: 'Movie 1', description: 'Description for Movie 1', imageUrl: 'https://picsum.photos/200/300' },
    { id: 2, title: 'Movie 2', description: 'Description for Movie 2', imageUrl: 'https://picsum.photos/200/300' },
    { id: 3, title: 'Movie 3', description: 'Description for Movie 3', imageUrl: 'https://picsum.photos/200/300' },
  ]

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites movies={favoriteMovies} />} />
        <Route path='/watch' element={<WatchPage />}/>
      </Routes>
    </div>
  );
}

export default App;
