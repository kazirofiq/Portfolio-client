import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => {
    const {_id, img, love, title, description, category} = project;
    return (
    <div className=''>
        <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 my-4'>
        <div className="card md:w-96 lg:w-96 w-full bg-base-100 shadow-xl">
        <figure><img className='h-52 w-full' src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <div className='flex justify-between'>
            <h2 className="card-title text-violet-800">{category}</h2>
            <h5 className=' font-bold'>{love}</h5>
            </div>
            <p className='text-3xl font-bold'>{title}</p>
            <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}>
                <button className="btn btn-primary"> View details</button>
            </Link>
            </div>
        </div>
        </div>
        
        
        </div>
    </div>
    );
};

export default Project;