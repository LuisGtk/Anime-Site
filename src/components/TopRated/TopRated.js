
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
                // fetch data from link
                const res = await fetch(apiURL);
               // converting json response into a variable
                const data = await res.json();
                // console.log(data)
                // dotting into array of anime inside the onbject
                const objectData = Object.values(data)[0];
                setAnime(objectData);
                console.log(anime);
            } catch (err) {
                console.error(err)
            }
        };
        getData();
    }, [])


















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
}