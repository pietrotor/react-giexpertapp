import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X','Dragon Ball']

    const [categories, setCategories] = useState(['Death Note']);
    
    // const handleAdd = () =>{
    //     setCategories([...categories, 'Death Nothe']); //Usamo el operado Spread para traer lo que ya teniamos
    // }

    return(
        <>
        <h1>GifExpertApp</h1>
        <AddCategory setCategories = {setCategories}/>
        <hr></hr>
        
        <ol>
            {
                categories.map(category =>(
                    <GifGrid 
                    key = {category}
                    category = {category}/>
                ))
            }
        </ol>
        </>
    );
}