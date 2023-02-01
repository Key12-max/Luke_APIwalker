import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Peoples= (props)=>{
    const{id} =useParams()
    const[apiData, setApiData]= useState({});


    const [homeworld, setHomeworld] = useState("");
    const [homeworldId, setHomeworldId] = useState();
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        axios
        .get(`https://swapi.dev/api/people/${id}`)
        .then((response)=>{
            setIsError(false);
            console.log(response.data)
            setApiData(response.data)
            getHomeworldId(response.data.homeworld);
            axios
            .get(response.data.homeworld)
            .then((homeworldIdRes)=>{
                console.log(homeworldIdRes.data.name)
                setHomeworld(homeworldIdRes.data.name);
            })
            .catch((err)=>console.log(err));
        })
        .catch(err=>console.log(err));
        setIsError(true);
    },[props]);

    const getHomeworldId = (homeworldURL) => {
        // check for 1 character ID
        if (homeworldURL.charAt(homeworldURL.length - 3) === "/") {
            const hwId = homeworldURL.charAt(homeworldURL.length - 2);
            setHomeworldId(hwId);
        } else {
            const firstCharId = homeworldURL.charAt(homeworldURL.length - 3);
            const secondCharId = homeworldURL.charAt(homeworldURL.length - 2);
            const idString = `${firstCharId}${secondCharId}`;
            setHomeworldId(idString);
        }
        // check for 2 character ID
    }
    if(!isError){
        return(
            <div>
                <h1>This is People API Data at ID:{id}</h1>
                <h1>{apiData.name}</h1>
                <p>Height: {apiData.height}</p>
                <p>Hair Color: {apiData.hair_color}</p>
                <p>Eye Color: {apiData.eye_color}</p>
                <p>Skin Color: {apiData.skin_color}</p>
                <p>Homeworld: {homeworld}</p>
                <Link to={`/planets/${homeworldId}`}>homeworld</Link>
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
            </>
        );
    }
}


export default Peoples;
