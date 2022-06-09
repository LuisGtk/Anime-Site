import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Genres from './components/Genres/Genres';
import TopRated from './components/TopRated/TopRated';


function App() {
  return (
    <div className="App">
      <nav className="App-header">

        <Link to={'/TopRated'}>
          <h1> Top-Rated </h1>
        </Link>
        <Link to={'/Genres'}>
          <h1> Genres </h1>
        </Link>

      </nav>
      <main>
        <Routes>
          <Route path='/TopRated' element={<TopRated />} />
          <Route path='/Genres' element={<Genres />} />
        </Routes>
      </main>
    </div >
  );
}

export default App;
