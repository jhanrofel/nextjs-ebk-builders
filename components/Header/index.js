"use client";

import Image from 'next/image';
import '@/styles/globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';


const Header = props => {
    const pathname = usePathname();
    const [isOpenMenuBurger, setIsOpenMenuBurger] = useState(false);
    return <div className='flex justify-between p-6'>
        <div className='w-40 md:w-80'>
            <Image src={'/images/logo-full.jpg'} alt='logo' width={330} height={300}/>
        </div>
        <div className='hidden md:flex md:font-bold md:text-md md:space-x-10 md:p-8'>
            <div className={pathname === '/' ? 'text-red-500' : 'hover:text-red-500'}><Link href="/">HOME</Link></div>
            <div className={pathname === '/about' ? 'text-red-500' : 'hover:text-red-500'}><Link href="/about">ABOUT</Link></div>
            <div className={pathname === '/service' ? 'text-red-500' : 'hover:text-red-500'}><Link href="/service">SERVICES</Link></div>
            <div className={pathname === '/project' ? 'text-red-500' : 'hover:text-red-500'}><Link href="/project">PROJECTS</Link></div>
            <div className={pathname === '/contact' ? 'text-red-500' : 'hover:text-red-500'}><Link href="/contact">CONTACTS</Link></div>
        </div>
        <div className='p-2 md:hidden'>
            <div><GiHamburgerMenu size={30} onClick={() => setIsOpenMenuBurger(!isOpenMenuBurger)}/></div>
        </div>
        {isOpenMenuBurger && <div className='absolute z-50 inset-y-16 right-8 flex-col bg-slate-200 h-36 py-5 pl-5 pr-10 text-sm rounded-md border-2 border-black sm:hidden'>
            <div className={pathname === '/' ? 'text-red-500' : 'hover:text-red-500'}><Link href="/">Home</Link></div>
            <div className={pathname === '/about' ? 'text-red-500' : 'hover:text-red-500'}><Link href="/about">About</Link></div>
            <div className={pathname === '/service' ? 'text-red-500' : 'hover:text-red-500'}><Link href="/service">Services</Link></div>
            <div className={pathname === '/project' ? 'text-red-500' : 'hover:text-red-500'}><Link href="/project">Projects</Link></div>
            <div className={pathname === '/contact' ? 'text-red-500' : 'hover:text-red-500'}><Link href="/contact">Contacts</Link></div>
        </div>}        
    </div>
}

export default Header;