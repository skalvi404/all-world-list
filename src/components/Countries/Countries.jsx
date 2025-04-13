import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countires.css'
const Countries = () => {

const [countries,setCountries]=useState([])

const [travelCountries,setTravelCountries]=useState([])



useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
},[])

const handleTravel=country=>{

const newTravelCountry=[...travelCountries,country];
setTravelCountries(newTravelCountry);

}

    return (
        <div>
           <h4>All world Where You should Vist:{countries.length}</h4> 
<div>
<h5>Your Selected Country:{travelCountries.length}</h5>
<ul>
    {travelCountries.map(country=><span><li>{country.name.common}</li></span>)}
</ul>
</div>
           

           <div className="countries-style">
            {
             countries.map(country=><Country handleTravel={handleTravel} key={country.cca3} country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;