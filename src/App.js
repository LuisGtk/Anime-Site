import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Genres from './components/Genres/Genres';


function App() {
  return (
    <div className="App">
      <nav className="App-header">

          <h1> Top-Rating </h1>
          {/* <Link to={'/'}> */}
            <h1> Genres </h1>
          {/* </Link> */}

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
