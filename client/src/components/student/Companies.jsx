import React from 'react'
import {assets} from '../../assets/assets'

const Companies = () =>{
    return (
        <div className='pt-16'>
            <p className='text-base text-gray-500'>Trusted by learners from</p>
            <div className='flex flex-wrap items-center justify-center md:gap-16 gap-6 md:mt-10 mt-5'>
                <img src={assets.microsoft_logo} alt="microsoft_logo" className='md:w-28 w-20'/>
                <img src={assets.walmart_logo} alt="walmart_logo" className='md:w-28 w-20'/>
                <img src={assets.accenture_logo} alt="accenture_logo" className='md:w-28 w-20'/>
                <img src={assets.adobe_logo} alt="adobe_logo" className='md:w-28 w-20'/>
                <img src={assets.paypal_logo} alt="paypal_logo" className='md:w-28 w-20'/>
                
            </div>
        </div>
    )
    
}

export default Companies