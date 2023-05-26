// import React from 'react';
import featuredimg from '../../../assets/home/featured.jpg'
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item pt-8 my-20'>
            <SectionTitle subHeading='chek it out' heading='Featured Item'>

            </SectionTitle>
            <div className='text-white md:flex justify-center items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>aug 20,2019</p>
                    <p className='uppercase'>where can i get some</p>
                    <p>Lorams transit rail grinding solutions have the productive power to remove more fatigued metal per pass, to correct and restore the rail in the most efficient manner.Loram's transit rail grinding solutions have the productive power to remove more fatigued metal per pass, to correct and restore the rail in the most efficient manner.</p>
                <button className='btn btn-outline'>order now </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;