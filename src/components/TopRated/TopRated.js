
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
                // console.log(data)
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
    // beggining of return statement
    //map the first argument of
    return anime.length > 0 ? (
        <section className="container">
            {anime.length &&
                anime.map((anime) => {
                    return (
                        // <Link to={`/details/${anime.date}`} key={anime.date}>
                        <div className="card">
                            {/* <div className="card-image"> */}
                            {/* {anime.attributes.thumbnail.original} */}
                            {/* </div> */}
                            <div className="card-title">
                                <ol className='favs'>
                                    <li className='title'>{anime.attributes.canonicalTitle}</li>
                                    <img
                                        className='animeImg'
                                        src={anime.attributes.posterImage.original}
                                        alt={anime.attributes.canonicalTitle}
                                    />
                                    <li>Date of release: {anime.attributes.startDate}</li>
                                    <li>Ratings:{anime.attributes.averageRating}</li>
                                    <p>{anime.attributes.description}</p>
                                </ol>
                            </div>
                        </div>
                        // </Link>
                    );
                })}
        </section>
    ) : (
        <h1>loading...</h1>
    );
}