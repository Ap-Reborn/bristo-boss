// import React from 'react';

import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data =>{
            const popularItems =data.filter(item=> item.category === 'popular');
            setMenu(popularItems)
        })
    },[])
    console.log(menu)
    return (
        <div>
   <section className="mb-12">
    <SectionTitle
        heading="from our Menu"
        subHeading="popular Items"
         >
    </SectionTitle>
    <div className="grid md:grid-cols-2 gap-10">
        {
            menu.map(item=><MenuItem
            key={item._id}
            item={item}
            ></MenuItem>)
        }
    </div>
    </section>         
        </div>
    );
};

export default PopularMenu;