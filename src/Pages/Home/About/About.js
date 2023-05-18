import React from 'react';

const About = () => {
    return (
        <div className='py-16'>
           <div className='text-center'>
           <h5 className=' text-violet-800 font-bold px-10'>A SHORT DESCRIPTION ABOUT ME</h5>
            <h2 className='text-5xl font-bold my-4 px-10'>Learn More About Me</h2>
           </div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='md:max-w-sm lg:max-w-sm   w-full rounded-lg shadow-2xl' src="https://i.ibb.co/rGkXPzF/best-pic1.jpg" />
                <div>
                <h1 className="text-5xl font-bold">Full Stack Web Developer</h1>
                <p className="py-6 text-2xl">I am a self-motivated Full Stack Developer with knowledge in React.js, Node.js, Express.js, Google Authentication, MongoDB, JavaScript, HTML, CSS, Bootstrap, Tailwind and mobile responsive web development.</p>
                <div className='my-3 text-2xl'>
                <p>Birthday: 11 Nov 1999</p>
                <p>Age: 23 Years</p>
                <p>City: Satkhira, Khulna, Bangladesh</p>
                <p>Phone: +8801926881485</p>
                <p>email: rofiqul01941056960@gmail.com</p>
                <p>Freelance: Available</p>
                </div>
                <a href="https://drive.google.com/file/d/1q6Uxue2qNedCiYSSALgGJJT7c9LVHXsq/view?usp=share_link" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary">download resume</button>
                </a>
                
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;