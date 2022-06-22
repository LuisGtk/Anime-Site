
import './TopRated.css';
import { useState, useEffect } from 'react';
///////////////////////////////////////////////////////////////////////////

export default function TopRated() {
    const [anime, setAnime] = useState([])

    // console.log(apiURL);
    //////////////////////////////////////////////////////////////////////////////////

    useEffect(() => {
        //async function and useEffect to convert original api to proper json format // proper array
        const getData = async () => {
            const apiURL = "https://kitsu.io/api/edge/trending/anime"

        try {
            // fetching data
            const res = await fetch
        }
        }
    })



















    //logs data
    // function fetchAnime() {
    //     fetch(apiURL)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data.data[0].attributes);
    //         });
    // }

    // one way of console logging data

    // function fetchAnime() {
    //     fetch(apiURL)
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             console.log(data.data)
    //             console.log(data.data[0].attributes.canonicalTitle )
    //         })
    // }
    // fetchAnime()

    ////////////////////////////////////////////////////////////////////////////////////





    return (
        <div>
            <h2>Here are the highly-rated anime at this</h2>
            {/* <button onClick={fetchAnime}>Fetch Anime</button> */}
            <ol>
                {/* <li>  ({data.data[0].attributes.canonicalTitle})  </li> */}
                <li>    </li>
                <li>    </li>
                <li>    </li>
            </ol>
        </div>
    )
}
