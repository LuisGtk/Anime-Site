import { useState, useEffect } from 'react';
import Search from '../Search/Search';

export default function Home() {

    const [list, setList] = useState([]);
    // increasing amount of results for the api
    const searchParameters = `?page%5Blimit%5D=20&page%5Boffset%5D=0`;

    useEffect(() => {
        //async function and useEffect to convert original api to proper json format // proper array
        const getData = async () => {
            const apiURL = `https://kitsu.io/api/edge/anime${searchParameters}`
            try {
                // fetch data from link
                const res = await fetch(apiURL);
                // converting json response into a variable
                const data = await res.json();
                // dotting into array of anime inside the onbject
                const objectData = Object.values(data)[0];
                // adding object values  into objectData variable
                setList(objectData);
                console.log(objectData);
            } catch (err) {
                console.error(err)
            }
        };
        getData();
    }, [])
    return (
<Search />
    )
}