import React from 'react';

const Skills = () => {
    return (
        <div className='py-16'>
            <div className='text-center'>
            <h5 className=' text-violet-800 font-bold px-10'>THE SKILLS I HAVE GAINED AS A DEVELOPER</h5>
            <h2 className='text-5xl font-bold my-4 px-10'>Professional Skill</h2>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-16 justify-between p-10'>
                <div>
                    <h2 className='text-3xl font-bold'>Front-End Skill</h2>
                    <label htmlFor="">HTML-5</label>
                <progress className="progress progress-primary w-ful" value="95" max="100"></progress> <br />
                    <label htmlFor="">CSS-3</label>
                <progress className="progress progress-primary w-ful" value="90" max="100"></progress> <br />
                    <label htmlFor="">Bootstrap</label>
                <progress className="progress progress-primary w-ful" value="95" max="100"></progress> <br />
                    <label htmlFor="">Tailwind CSS</label>
                <progress className="progress progress-primary w-ful" value="90" max="100"></progress> <br />
                    <label htmlFor="">React.js</label>
                <progress className="progress progress-primary w-ful" value="85" max="100"></progress> <br />
               
                
                </div>
                <div>
                    <h2 className='text-3xl font-bold'>Backend Skills</h2>
                    <label htmlFor="">Java Script</label>
                <progress className="progress progress-primary w-ful" value="80" max="100"></progress> <br />
                    <label htmlFor="">Node.js</label>
                <progress className="progress progress-primary w-ful" value="85" max="100"></progress> <br />
                    <label htmlFor="">Express.js</label>
                <progress className="progress progress-primary w-ful" value="70" max="100"></progress> <br />
                    <label htmlFor="">MongoDB</label>
                <progress className="progress progress-primary w-ful" value="75" max="100"></progress> <br />
                    <label htmlFor="">JWT</label>
                <progress className="progress progress-primary w-ful" value="70" max="100"></progress> <br />
                
                </div>
            </div>
        </div>
    );
};

export default Skills;