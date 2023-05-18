import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Project from '../Project/Project';

const Projects = () => {
    // const projects = useLoaderData()
    const [projects, setProject] = useState([]);
    useEffect(() =>{
        fetch('https://portfolio-server-side-ten.vercel.app/project')
        .then(res => res.json())
        .then(data => setProject(data))
    }, [])
    return (
        <div>
        <div className='text-center mt-10 '>
        <h5 className=' text-violet-800 font-bold'>VISIT MY PROJECT AND GIVE YOUR FEEDBACK</h5>
        <h2 className='text-5xl font-bold my-4'>My Projects</h2>
    </div>
        <div className='grid gap-4 px-10 my-16  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                projects.map(project => <Project
                key={project._id}
                project={project}
                ></Project>)
            }
        </div>
        
        
    </div>
    );
};

export default Projects;