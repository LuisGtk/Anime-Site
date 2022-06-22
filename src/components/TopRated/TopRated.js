
import './TopRated.css';
import { useState, useEffect, Link } from 'react';

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
    return photos.length > 0 ? (
        <section className="container">
            {photos.length &&
                photos.map((photo) => {
                    return (
                        <Link to={`/details/${photo.date}`} key={photo.date}>
                            <div className="card">
                                <div className="card-image">
                                    {photo.media_type === "image" ? (
                                        <img src={photo.url} alt={photo.title} />
                                    ) : (
                                        <img
                                            src="https://apod.nasa.gov/apod/image/1210/Helix_BiColour_Finalpugh1022c.jpg"
                                            alt="This is the Helix Nebula"
                                        />
                                    )}
                                </div>
                                <div className="card-title">
                                    <h3>{photo.title}</h3>
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