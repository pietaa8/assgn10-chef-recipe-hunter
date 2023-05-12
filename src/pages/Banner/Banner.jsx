import React, { useEffect, useState } from 'react';
import ChefSection from '../ChefSection/ChefSection';

const Banner = () => {
    const [chefs,setChefs]=useState([]);

    useEffect(()=>{
        fetch('https://assignment-ten-server-priyab99.vercel.app/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data))
        .catch(error=>console.error(error))

    },[])


    return (
        <div>
            {
                chefs.map(chef=><ChefSection
                key={chef.id}
                chef={chef}
                ></ChefSection>)
            }
            
        </div>
    );
};

export default Banner;