import './Style.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Form = (props) => {
    const [state, setState]= useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate(`/${state}/${id}`);
        
        
    }
    return (
        <div className='form'>
            <form onSubmit={handleSubmit} >
            <label>Search for: </label>
                <select onChange={(e)=>{setState(e.target.value)}}>                     <option value="">-------</option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
                <label>ID:  </label>
                <input onChange={(e)=>{setId(e.target.value)}}
                type="number"/>
            <button>Search</button>
            </form>
        </div>
    );
}

export default Form;
