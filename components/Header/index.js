import Image from 'next/image';
import '@/styles/globals.css';
import Link from 'next/link';

const Header = props => {
    return <div className='flex justify-between p-6'>
        <div className='flex-none mx-12'>
            <Image src={'/images/logo-full.jpg'} alt='logo' width={330} height={300}/>
        </div>
        <div className='flex font-bold text-lg space-x-10 p-10'>
            <div className=''><Link href="/">Home</Link></div>
            <div className=''><Link href="/about">About</Link></div>
            <div className=''><Link href="/service">Services</Link></div>
            <div className=''><Link href="/project">Projects</Link></div>
            <div className=''><Link href="/contact">Contacts</Link></div>
        </div>
    </div>
}

export default Header;