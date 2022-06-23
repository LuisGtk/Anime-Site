import { useEffect, useState } from 'react';
import './Search.css';

export default function Search({data}) {
    const [list, setList] = useState([]);

    useEffect(() => {
        //async function and useEffect to convert original api to proper json format // proper array
        const getData = async () => {
            const searchURL = "https://kitsu.io/api/edge/anime"
            try {
                // fetch data from link
                const res = await fetch(searchURL);
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


    return(
        <form className='charSearch'>
        <input className='myInput' type="text" placeholder="Ex: Dragon Ball" name="search"></input>
        <button className='myBtn' type='submit'>Submit</button>

        <div className='results'>
{/* {data.attributes.slug} */}
        </div>
    </form>
    )
}