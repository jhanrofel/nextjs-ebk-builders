"use client";

import Image from 'next/image';
import '@/styles/globals.css';
import Link from 'next/link';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaFacebookSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const Footer = () => {
    const router = useRouter();

    return <div className='flex bg-red-900 text-white text-sm py-20 flex-col space-y-20 md:space-y-0 md:flex-row md:justify-around '>
        <div className='footer_item'>
            <div className='flex pb-5'>
                <Image src={'/images/logo-full.jpg'} alt='logo' width={300} height={200}/>
            </div>            
            <div className='flex space-x-5'>
                <Link href="https://www.facebook.com/ebkbuildersopc?mibextid=uzlsIk" target="_blank">
                    <FaFacebookSquare size={40} />
                </Link>
                <Link href="https://www.instagram.com/ebkbuildersopc/?igsh=MXZ6dGJ1enp3MWV4MA%3D%3D&utm_source=qr&fbclid=IwY2xjawEaqelleHRuA2FlbQIxMAABHbduo0_81outUYJQgqJLeCogesDOrMMoCklDtoWBPTofgMI9jYaP3HVJdA_aem_2Lr7YNjM4r3vouy1X-6cOA" target="_blank">
                    <FaInstagramSquare size={40} />
                </Link>
                <Link href="https://www.tiktok.com/@ebk.builders.opc?_t=8oYWpfcEUXA&_r=1&fbclid=IwY2xjawEarsxleHRuA2FlbQIxMAABHYrEpBdfvntdRE9ilhGTgs0-rsmUD86XeXWd1UShZqwbBYJObXcNeq9ucw_aem_RTtBkIG53qerrk0l4_jvwQ" target="_blank">
                    <div className='bg-white p-1 rounded-[4px] mt-0.5'>
                        <FaTiktok size={28} color='maroon'/>
                    </div>                    
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
            <div  className='bg-gray-800 relative w-80 h-60'>
                <Image
                    src={'/images/work-gallery.jpeg'}
                    alt={'Work Gallery Image'}
                    fill
                    sizes='100'
                />
            </div>
        </div>
    </div>
}

export default Footer;