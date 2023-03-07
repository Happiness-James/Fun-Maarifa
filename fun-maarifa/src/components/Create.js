import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import {useNavigate} from 'react-router-dom';


// Handles Game creation
function CreateGames(){
    const [formData,setFormData]=useState({
        title:"",
        image_url:"",
        description:"",
        
    })
    
    function handleChange(e){
       
          setFormData({
            ...formData,
            [e.target.name]:e.target.value
          })
    }
    const navigate = useNavigate();


    function handleSubmit(){
        fetch("http://localhost:9294/game",{
            method:"POST",
            headers:{
                "content-Type":"application/json",
            },
            body:JSON.stringify(formData)
        })
        .then((resp)=>(resp.json)())
        navigate('/games')
    }


    return(
<>
<Navbar/>

<div id="form">
        <form onSubmit={handleSubmit} > 
            <h3 className="headers">Add Your Game Here</h3><br/>
            <input onChange={handleChange} placeholder="title" type="text" name="title" value={formData.title}></input><br/><br/>
            <input onChange={handleChange} placeholder="image_url" type="text" name="image_url" value={formData.image_url}></input><br/><br/>
            <input onChange={handleChange} placeholder="description" type="text" name="description" value={formData.description} required></input ><br/><br/>
            <button id="button" >Add Game</button>   
        </form>
        </div>

</>
       
    )   

}
export default CreateGames;