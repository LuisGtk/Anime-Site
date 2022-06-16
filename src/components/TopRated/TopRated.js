import './TopRated.css';
import { useState } from 'react';
///////////////////////////////////////////////////////////////////////////

export default function TopRated() {
    const apiURL = "https://kitsu.io/api/edge/trending/anime";
    const [anime, setAnime] = useState([])

    // console.log(apiURL);
//////////////////////////////////////////////////////////////////////////////////

// logs data
    // function fetchAnime() {
    //     fetch(apiURL)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         });
    // }

// logs data array in data
    function fetchAnime() {
        fetch(apiURL)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data.data)
                console.log(data.data[0].attributes.canonicalTitle )
            })
    }
    // fetchAnime()

////////////////////////////////////////////////////////////////////////////////////9ij

    return (
        <div>
            <h2>Here are the highly-rated anime at this</h2>
            <button onClick={fetchAnime}>Fetch Anime</button>
            <ol>
                {/* <li>  ({data.data[0].attributes.canonicalTitle})  </li> */}
                <li>    </li>
                <li>    </li>
                <li>    </li>
            </ol>
        </div>
    )
}
