import { useEffect, useState } from 'react';
import './Search.css';

export default function Search({data}) {
    const [search, setSearch] = useState([]);


    return(
        <form className='charSearch'>
        <input className='myInput' type="text" placeholder="Ex: Deathnote" name="search"></input>
        <button className='myBtn' type='submit'>Submit</button>
        <div className='results'>
        </div>
    </form>
    )
}