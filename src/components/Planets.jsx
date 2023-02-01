import React ,{ useState, useEffect }from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Planet =(props)=>{
    const{id} = useParams()
    const[apiPlanet, setApiPlanet]= useState({})
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        axios
        .get(`https://swapi.dev/api/planets/${id}`)
        .then((response)=>{
            setIsError(false);
            console.log(response.data)
            setApiPlanet(response.data)
        })
        .catch(err=>console.log(err));
        setIsError(true);
    }, [props]);

    if(!isError){
        return(
            <div>
                <h1>This is Planets API data at ID:{id}</h1>
                <h1>{apiPlanet.name}</h1>
                <p>Climate: {apiPlanet.climate } </p>
                <p>Terrain: { apiPlanet.terrain } </p>
                <p>Surface_Water: {apiPlanet.surface_water} </p>
                <p>Population: {apiPlanet.population} </p>
                <Link to={"/"}>Back to the Home Page</Link>
            </div>
        )
    }
    else{
        return(
            <>
            <img
            src="https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg?w=800&quality=85"
            alt=""
        />
        <h3>These aren't the droids you're looking for</h3>
        <Link to={"/"}>Back to the Home Page</Link>
            </>
        );
    }
};
export default Planet;
