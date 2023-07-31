import {useEffect, useState} from 'react'
import '../App.css'

function Starships(){
    const [starShip, setStarship] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try{
                const res = await fetch('https://swapi.dev/api/starships/?page=1')
                const data = await res.json();
                console.log(data.results);
                setStarship(data.results);
            }catch(error){
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return(
     <div className='Container'>
        {
            starShip ? starShip.map(ship => <div className='Card'><h1>{ship.name}</h1></div>) : <h1>Loading...</h1>
        }
     </div>
    )
}

export default Starships;