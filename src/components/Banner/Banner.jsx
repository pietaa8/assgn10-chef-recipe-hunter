import React, { useEffect, useState } from 'react';
import Chefs from '../Chefs/Chefs';

const Banner = () => {

    const [chefs,setChefs]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data))
        .catch(error=>console.error(error))
    },[])
    return (
        <div>
            <h3>Our Chefs</h3>
            {
                chefs.map(chef=> <Chefs
                key={chef.id}
                chef={chef}
                ></Chefs> )
            }
            
        </div>
    );
};

export default Banner;