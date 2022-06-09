import './TopRated.css'
// import {useState} from 'react' 
export default function TopRated() {
    const apiURL = "https://kitsu.io/api/edge/trending/anime";
    // const [rate, setRate] = useState(null)

    function fetchAnime() {
        fetch(apiURL)
            .then(Response => Response.json())
            .then(data => {
                console.log(data);
            });
    }


    return (
        <div>
            <button onClick={fetchAnime}> Fetch Anime</button>
            <h2>{fetchAnime.canonicalTitle}</h2>
            <h2>Hello World</h2>
        </div>


    )
}