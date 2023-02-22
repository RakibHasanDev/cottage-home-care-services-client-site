import React from 'react';
import './Home.css'

import comfort from '../../../src/Assets/Images/comfort.png'
import relief from '../../../src/Assets/Images/relief-1.png'
import peace from '../../../src/Assets/Images/peace.png'



const Home = () => {
    return (
        <div className='min-h-screen mb-20'>
            <div className='bg-cover '>
                <h1 className='playrify text-center pt-[30vh] text-white text-8xl title '>
                RIGHT HOME CARE <br />
                FOR YOU

                </h1>

                <h4 className='roboto  text-white text-center mt-[14vh] font-normal text-3xl'>
                PCA CDPAP SERVICES THROUGHOUT NEW YORK CITY 
                </h4>

                <div className='flex justify-center text-white mt-10 font-semibold gap-8'>
                    <button className=' px-8 py-4 rounded-full text-xl bg-primary uppercase'>
                        Contact Us
                    </button>
                    <button className=' px-8 py-4 rounded-full text-xl border-2 border-primary'>
                        Apply as a Home Health Aide
                    </button>

                </div>

            </div>
            <div className='grid grid-cols-3'>
               <div className='flex justify-center bg-[#DBF2F4] py-6'>
               <div className=' flex items-center gap-5   '>
                    <img src={comfort} alt="" className='w-14 h-14' />
                     <p className='text-2xl font-semibold '>Find comfort</p>

                </div>
               </div>
               <div className='flex justify-center bg-[#49A4B0] py-6'>
               <div className=' flex items-center gap-5   '>
                    <img src={relief} alt="" className='w-14 h-14' />
                    
                     <p className='text-2xl font-semibold text-white'>
                     Find relief
                     </p>
                </div>
               </div>
               <div className='flex justify-center bg-[#322E51] py-6'>
               <div className=' flex items-center gap-5   '>
                    <img src={peace} alt="" className='w-14 h-14' />
                     <p className='text-2xl font-semibold text-white'>Find peace of mind</p>

                </div>
               </div>
                
                

            </div>
        </div>
    );
};

export default Home;