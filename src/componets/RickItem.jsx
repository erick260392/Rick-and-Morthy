
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const RickItem = ({resident}) => {

const [Rick, setRick] = useState({})


useEffect(() => {

    axios.get(resident)
    .then(res => setRick(res.data))
 
}, [])

const statusStyleDead ={
    color:"red"
}

const statusStyleAlive ={
    color:"green"
}

const getStatus = ()=>{
    if(Rick.status === "Alive"){
        return(
            <i class="fa-solid fa-circle" style={statusStyleAlive} ></i>
        )
    }else if(Rick.status === "Dead") {
        return(
            <i class="fa-solid fa-circle" style={statusStyleDead} ></i>
        )
        
    }
}

 
    console.log(Rick);

    return (
        <div className="main">

        <div className='card'>
        <div className='card_image'>
<img src={Rick.image} alt="" />
        </div>    
        <div className="card_info">
<h1> <b>Nombre: </b> {Rick?.name}</h1>
<h2> <b>Status: </b> {Rick.status}</h2> {getStatus()}
<h3> <b>Lugar de Origen: </b> {Rick.origin?.name}</h3>
<h3> <b>Cantidad de episodios donde aparece: </b> {Rick.episode?.length}</h3>

        </div>


        </div>
        </div>
    );
};

export default RickItem;