import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countires.css'
const Countries = () => {

const [countries,setCountries]=useState([])

useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
},[])


    return (
        <div>
           <h4>All world Where You should Vist:{countries.length}</h4> 

           <div className="countries-style">
            {
             countries.map(country=><Country key={country.cca3} country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;