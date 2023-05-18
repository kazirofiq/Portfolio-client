import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9vmj0fr', 'template_ldy4t3s', form.current, 'fdVJTtU0lzlu8xr53')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return (
        <section className='py-16 '>
            <div className='text-center'>
            <h5 className=' text-violet-800 font-bold px-10'>FOR ANY QUERY PLEASE CONTACT WITH ME</h5>
            <h2 className='text-5xl font-bold my-4 px-10'>Contact With Me</h2>
            </div>
            <div className="hero min-h-screen  bg-base-200">
            <div className="card flex-shrink-0 lg:w-full   shadow-2xl bg-base-100">
                <form ref={form} onSubmit={sendEmail}>
                <div className="card-body w-2/3 mx-auto">
                    <div className="form-control">
                    <input type="text" name='user_name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <input type="email" name='user_email' required placeholder="Your Email" className="input input-bordered" />
                    </div>
                    <textarea className="textarea textarea-bordered"        placeholder="Your Details"></textarea>
                    <div className="form-control mt-6">
                    <button className='btn btn-primary' type="submit">Send</button>
                    </div>
                </div>
                </form>
                </div>
            </div>
            </section>

       
    );
};

export default Contact;