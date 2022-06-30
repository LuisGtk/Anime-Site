import { useEffect, useState } from 'react';
import './Search.css';

export default function Search({data}) {


    return(
        <form className='charSearch'>
        <input className='myInput' type="text" placeholder="Ex: Dragon Ball" name="search"></input>
        <button className='myBtn' type='submit'>Submit</button>
        <div className='results'>

        </div>
    </form>
    )
}