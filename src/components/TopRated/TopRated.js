
import './TopRated.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TopRated() {
    const [anime, setAnime] = useState([]);


    useEffect(() => {
        //async function and useEffect to convert original api to proper json format // proper array
        const getData = async () => {
            const apiURL = "https://kitsu.io/api/edge/trending/anime"
            try {
                // fetch data from link
                const res = await fetch(apiURL);
                // converting json response into a variable
                const data = await res.json();
                console.log(data)
                // dotting into array of anime inside the onbject
                const objectData = Object.values(data)[0];
                // adding object values  into objectData variable
                setAnime(objectData);
                console.log(objectData);
            } catch (err) {
                console.error(err)
            }
        };
        getData();
    }, [])
    return anime.length > 0 ? (
        <section className="container">
            {anime.length &&
                anime.map((anime) => {
                    return (
                        
                        <Link to={`/details/${anime.date}`} key={anime.date}>
                            <div className="card">
                                <div className="card-image">
                                    {/* {anime.media_type === "image" ? (
                                        <img src={anime.url} alt={anime.title} />
                                    ) : (
                                        <img
                                            src="https://apod.nasa.gov/apod/image/1210/Helix_BiColour_Finalpugh1022c.jpg"
                                            alt="This is the Helix Nebula"
                                        />
                                    )} */}
                                </div>
                                <div className="card-title">
                                    <h3>{anime.attributes.canonicalTitle}</h3>
                                    <p></p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
        </section>
    ) : (
        <h1>loading...</h1>
    );
}