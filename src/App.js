import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Genres from './components/Genres/Genres';
import TopRated from './components/TopRated/TopRated';
import Home from './components/Home/Home';

function App() {
  
  return (
    <div className="App">
      <nav className="App-header">
      <Link to={'/'}>
          <h1> Homepage </h1>
        </Link>
        <Link to={'/TopRated'}>
          <h1> Top-Rated </h1>
        </Link>
        <Link to={'/Genres'}>
          <h1> Genres </h1>
        </Link>
      </nav>
      <main>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/TopRated' element={<TopRated />} />
          <Route path='/Genres' element={<Genres />} />
        </Routes>
      </main>
    </div >
  );
}
export default App;
