"use client";

import Image from 'next/image';
import '@/styles/globals.css';
import Link from 'next/link';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaFacebook } from "react-icons/fa";
import { useRouter } from 'next/navigation'

const Footer = () => {
    const router = useRouter();

    return <div className='flex bg-red-900 text-white space-x-20 justify-center text-sm'>
        <div className='flex-col py-20 space-y-5'>
            <Image src={'/images/logo-full.jpg'} alt='logo' width={300} height={200}/>
            <div className='flex'>
                <Link href="https://www.facebook.com/ebkbuildersopc?mibextid=uzlsIk" target="_blank">
                    <FaFacebook size={40} />
                </Link>                
            </div>
        </div>
        <div className='flex-col py-20 w-80'>
            <div className='font-bold text-2xl pb-2'>CONTACT US</div>
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
        <div className='flex-col py-20 w-60 space-y-2'>
            <div className='font-bold text-2xl pb-2'>QUICK LINKS</div>
            <div>
                <Link href="/about">About Us</Link>
            </div>
            <div>
                <Link href="/service">Service Offered</Link>
            </div>
            <div>
                <Link href="/project">Clients</Link>
            </div>
        </div>
        <div className='flex-col w-60 py-20 space-y-2' onClick={() => router.push('/project')}>
            <div className='flex justify-center font-bold text-2xl'>WORK GALLERY</div>
            <div className='flex justify-center space-x-4'>
                <div>
                    <Image src={'/images/projects/2a.jpeg'} alt={'projects'} width={60} height={60}/>
                </div>
                <div>
                    <Image src={'/images/projects/2d.jpeg'} alt={'projects'} width={60} height={60}/>
                </div>
                <div>
                    <Image src={'/images/projects/2b.jpeg'} alt={'projects'} width={60} height={60}/>
                </div>
            </div>
            <div className='flex justify-center space-x-4'>
                <div>
                    <Image src={'/images/projects/1a.jpeg'} alt={'projects'} width={60} height={60}/>
                </div>
                <div>
                    <Image src={'/images/projects/2a.jpeg'} alt={'projects'} width={60} height={60}/>
                </div>
                <div>
                    <Image src={'/images/projects/3b.jpeg'} alt={'projects'} width={60} height={60}/>
                </div>            
            </div>
            <div className='flex justify-center space-x-4'>
                <div>
                    <Image src={'/images/projects/2d.jpeg'} alt={'projects'} width={60} height={60}/>
                </div>
                <div>
                    <Image src={'/images/projects/1b.jpeg'} alt={'projects'} width={60} height={60}/>
                </div>
                <div>
                    <Image src={'/images/projects/3d.jpeg'} alt={'projects'} width={60} height={60}/>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;