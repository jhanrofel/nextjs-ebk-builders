"use client";

import Image from 'next/image';
import '@/styles/globals.css';
import Link from 'next/link';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const Footer = () => {
    const router = useRouter();

    return <div className='flex bg-red-900 text-white text-sm py-20 flex-col space-y-20 md:space-y-0 md:flex-row md:justify-around'>
        <div className='footer_item'>
            <div className='flex pb-5'>
                <Image src={'/images/logo-full.jpg'} alt='logo' width={300} height={200}/>
            </div>            
            <div className='flex space-x-5'>
                <Link href="https://www.facebook.com/ebkbuildersopc?mibextid=uzlsIk" target="_blank">
                    <FaFacebookSquare size={40} />
                </Link>
                <Link href="https://www.instagram.com/ebkbuilders/?igsh=MXZ6dGJ1enp3MWV4MA%3D%3D&utm_source=qr&fbclid=IwAR2y0EY9Gh58ypGEu9MimqVCUE-LlWg9qTyibSVXncqCyv9VOy8xBgtRSK0" target="_blank">
                    <FaInstagramSquare size={40} />
                </Link>
            </div>
        </div>
        <div className='footer_item '>
            <div className='footer_item_title'>CONTACT US</div>
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
        <div className='footer_item'>
            <div className='footer_item_title'>QUICK LINKS</div>
            <div className='flex-col space-y-2'>
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
        </div>
        <div className='footer_item hover:cursor-pointer' onClick={() => router.push('/project')}>
            <div className='footer_item_title'>WORK GALLERY</div>
            <div className='space-y-4'>
                <div className='flex space-x-4'>
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
                <div className='flex space-x-4'>
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
                <div className='flex space-x-4'>
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
    </div>
}

export default Footer;