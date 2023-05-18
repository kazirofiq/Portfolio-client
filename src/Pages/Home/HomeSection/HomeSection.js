import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, IconName } from "react-icons/fa";


const HomeSection = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'> */}
            
            <img  src="https://i.ibb.co/9tc8YSk/best-pic7.jpg" className=" md:max-w-sm lg:max-w-sm   w-full rounded-lg shadow-2xl" />
           
            <div >
            <h1 className="text-5xl font-bold">Hi, I'm <span className=' text-violet-800 '>Rofiqul Islam Full Stack Web  Developer.</span></h1>
            <p className="py-6">I am a web developer with an amazing ability to develop websites that are both functional and aesthetically pleasing. I have a strong under-standing of web standards and best practices, and I am passionate about creating websites that users will find easy to use and visually appealing.</p>
            
            <div className='grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 justify-between'>
                <div>
                <h2 className='text-5xl font-bold my-4'>Find With Me</h2> 
                <div className='grid grid-cols-3  mt-10'>
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
                <div>
                <h2 className='text-5xl font-bold my-4'>Best Skill On</h2> 
                <div className="avatar grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2">
                    <div className="md:w-16 lg:w-16 w-32 mask mask-squircle m-3">
                        <img src="https://i.ibb.co/rvJf4q3/download-1.jpg" />
                    </div>
                    <div className="md:w-16 lg:w-16 w-32 mask mask-squircle m-3">
                        <img src="https://i.ibb.co/2Npqz04/download-1.png" />
                    </div>
                    <div className="md:w-16 lg:w-16 w-32 mask mask-squircle m-3">
                        <img src="https://i.ibb.co/nMXDV7S/download-2.png" />
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
            
        // </div>
    );
};

export default HomeSection;