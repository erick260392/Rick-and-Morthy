import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RickItem from './RickItem';



const Location = () => {

const [Locations, setLocations] = useState({})
const [Serch, setSerch] = useState("")

useEffect(() => {

const RandomNumber = Math.floor(Math.random()*126)+1;
axios.get(`https://rickandmortyapi.com/api/location/${RandomNumber}`)
.then(res => setLocations(res.data))
  
}, [])

const searchlocations= ()=>{
     axios.get(`https://rickandmortyapi.com/api/location/${Serch}`)
     .then(res => setLocations(res.data))
          
      
}

 

// console.log(Locations);

    return (
        <div>
             <div className="header">
            <input placeholder='ESCRIBE EL ID' id='Serch' type="text" value={Serch} onChange ={e=>setSerch(e.target.value)}/>
            <button id='Serch_button' onClick={searchlocations}>submit</button>

             </div>
             <div className="info">
            <h1>{Locations.name}</h1><br />
           <div className='info_sub'>
            <h3><b>Type: </b>{Locations.type}</h3>
            <h3><b>Dimension: </b>{Locations.dimension} </h3>
            <h3><b>Population: </b>{Locations.residents?.length} </h3>

           </div>


            
        
             </div>


  
<ul>

            
{Locations.residents?.map(
 residentsURL =>(

     <li>

         <RickItem  key={residentsURL.name}  resident= {residentsURL}     />
     </li>                
 )
)}
</ul>





        </div>
    );
};

export default Location;