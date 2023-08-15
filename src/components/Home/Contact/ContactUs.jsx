import React from 'react';

const ContactUs = () => {
    return (
        <div className='text-center'>
           <div>
           <h1 className='text-5xl font-bold mt-20'>Contact Us</h1>
            <p className='text-2xl mb-32'>If you have any questions or feedback, please feel free to get in touch with us:</p>

            <div className='grid grid-cols-2 text-2xl gap-20 my-20'>
            
                <div >
                <h1 className='text-3xl font-bold'>Write to Us:</h1>
                <h2>Email: example@example.com</h2>
                </div>
                <div>
                <h1 className='text-3xl font-bold'>Call to Us:</h1>
                <h2>Phone: +880 01581 400 986</h2>
                </div>

               <div>
               <h1 className='text-3xl font-bold'>Find Us:</h1>
                <h2>Address: 123 Main Street, City, Country</h2>
               </div>
            
            
            </div>
           </div>
            
        </div>
    );
};

export default ContactUs;