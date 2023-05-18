import React, {} from 'react';
import { FaFacebook, FaGithub, FaLinkedin, IconName } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
// import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const {_id, title, love, img, img2, img3, img4, description, category } = useLoaderData();
    return (
        <div className=''>
           
        <div className="card w-full bg-base-300 shadow-xl mx-auto mt-10 mb-20">
        <figure className="px-10 pt-10">
        
         
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4 '>
            <div><img className='w-full h-72' src={img} alt="" /></div>
            <div><img className='w-full h-72' src={img2} alt="" /></div>
            <div><img className='w-full h-72' src={img3} alt="" /></div>
            <div><img className='w-full h-72' src={img4} alt="" /></div>
        </div>
        
  

       
        </figure>
        <div>

        </div>
        <div className="card-body">
        <h2 className="text-3xl">
            {title}
            </h2>
        <p className='font-bold'>
            {category}
            </p>
        <p className='text-2xl'>
            
            {description}
            </p>
            <div className='my-10'>
            <a href="https://learnwithrakib.pro/" target="_blank" rel="noopener noreferrer">
            <p className='text-blue-800 text-lg font-bold'>Live Site</p>
            </a>
            <a href="https://project-builder-f5689.web.app/" target="_blank" rel="noopener noreferrer">
            <p className='text-blue-800 text-lg font-bold'>Live Site</p>
            </a>
            <a href="https://car-client-25eb5.web.app/" target="_blank" rel="noopener noreferrer">
            <p className='text-blue-800 text-lg font-bold'>Live Site</p>
            </a>
            </div>
            <h2 className='text-5xl font-bold my-4'>Find With Me</h2> 
                <div className='grid grid-cols-3 gap-4 mt-10'>
                    <div><a href="https://www.facebook.com/kazi.rofik.5" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className='text-5xl '></FaFacebook>
                        </a></div>
                    <div><a href="https://github.com/kazirofiq" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='text-5xl'></FaGithub>
                        </a></div>
                    <div><a href="https://www.linkedin.com/in/mdrofiqulislam85/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='text-5xl '></FaLinkedin>
                    </a>
                    
                    </div>

                    </div>
        </div>
        </div>
        
        </div>
    );
};

export default ProjectDetails;