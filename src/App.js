import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Genres from './components/Genres/Genres';


function App() {
  return (
    <div className="App">
      <nav className="App-header">

      <Link to={'/Top-Rated'}>
            <h1> Top-Rated </h1>
          </Link>
          <Link to={'/Genres'}>
            <h1> Genres </h1>
          </Link>

      </nav>
        <main>
      {/* <Routes>
        <Route path='/Genres' element={<Genres />} />
      </Routes> */}
    </main>
    </div >
  );
}

export default App;
