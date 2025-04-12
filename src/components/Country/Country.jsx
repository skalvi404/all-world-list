import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
    const { name, flags } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }


    return (
        <div className="country">
            <h4>Name:{name.common}</h4>

            <img className='image' src={flags.png} alt="" />
            <div className='country'>

                <button onClick={handleVisited}>{visited?'Going':'visited'}</button> <br /><br />
                {visited && 'I have Visited The country'}

            </div>



        </div>
    );
};

export default Country;