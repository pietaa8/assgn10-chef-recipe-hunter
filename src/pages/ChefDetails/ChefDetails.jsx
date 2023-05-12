import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {

    const {chefId}=useParams();
    const chefs=useLoaderData();
    const [chefDetail,setChefDetails]=useState({});
    useEffect(()=>{
        if(chefs&&chefs.length){
            const chef=chefs.find(chef=>chef.id==chefId);
            setChefDetails(chef);
        }
    },[chefs,chefId])

    const {name,img,experience,likes,bio,numRecipes,recipeImages,recipeName1,ingredients1,method1,rating1,recipeName2,ingredients2,method2,rating2,recipeName3,ingredients3,method3,rating3}=chefDetail;
    return (
        <div>
            <h2 className='text-center'>Everything About Our Chef Exclusively</h2>
            <p>{name}</p>


            
        </div>
    );
};

export default ChefDetails;