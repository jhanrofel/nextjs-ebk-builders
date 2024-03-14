"use client";

import Image from 'next/image';
import '@/styles/globals.css';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='flex-col'>
            <div className='flex bg-zinc-800 space-x-20 justify-center h-60'>
                <Image src={'/images/banner/contact.png'} alt={'about'} width={1500} height={200}/>
            </div>
            <div className='flex space-x-20 justify-center py-20'>
                <div className='w-2/6 text-justify'>
                    <div className='flex-col py-10 w-80 space-y-10 '>
                        <div className='flex space-x-5'>
                            <div className='pt-2'><FaLocationDot size={20} /></div>
                            <div>Block 2 Lot 8 Violago Homes Brgy. Bagong Silangan, Quezon City</div>
                        </div>                        
                        <div className='flex space-x-5'>
                            <div className='pt-4'><MdEmail size={20} /></div>
                            <div className='flex-col'>
                                <div className='pt-2'>ebkglass@gmail.com</div>
                                <div>ebkbuildersopc@gmail.com</div>
                            </div>
                        </div>            
                        <div className='flex space-x-5'>
                            <div className='pt-5'><FaPhone size={18} /></div>
                            <div className='flex-col'>
                                <div className='pt-2'>(+63) 956-156-3877</div>
                                <div>(+53) 976-233-5756</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-3/6'>
                    <Image src={'/images/hero/3.png'} alt={'about'} width={1500} height={200}/>
                </div>
            </div>
        </div>
    );
}

export default Contact;