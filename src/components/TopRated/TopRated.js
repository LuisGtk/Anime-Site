import './TopRated.css';
import { useState } from 'react';
///////////////////////////////////////////////////////////////////////////

export default function TopRated() {
    const apiURL = "https://kitsu.io/api/edge/trending/anime";
    const [anime, setAnime] = useState([])
    // console.log(apiURL);
    //////////////////////////////////////////////////////////////////////////////////

    function fetchAnime() {
        fetch(apiURL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    }


    ////////////////////////////////////////////////////////////////////////////////////

    return (
        <div>
            <h2>Here are the highly-rated animw at this time.</h2>
            <button onClick={fetchAnime}>Fetch Anime</button>
        </div>
    )
}
