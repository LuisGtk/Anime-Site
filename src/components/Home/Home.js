import { useState, useEffect } from 'react';
export default function Home() {

        const [list, setList] = useState([]);


        useEffect(() => {
            //async function and useEffect to convert original api to proper json format // proper array
            const getData = async () => {
                const apiURL = "https://kitsu.io/api/edge/anime"
                try {
                    // fetch data from link
                    const res = await fetch(apiURL);
                    // converting json response into a variable
                    const data = await res.json();
                    console.log(data)
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
            <h1>"Welcome to the home page!"</h1>
        )
    }