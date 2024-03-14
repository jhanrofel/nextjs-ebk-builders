import Image from 'next/image';
import '@/styles/globals.css';

const Header = props => {
    return <div className='flex justify-between p-6'>
        <div className='flex-none mx-12'>
            <Image src={'/images/logo-full.jpg'} alt='logo' width={330} height={300}/>
        </div>
        <div className='flex font-bold text-lg space-x-10 p-10'>
            <div className=''>Home</div>
            <div className=''>About</div>
            <div className=''>Services</div>
            <div className=''>Projects</div>
            <div className=''>Contact</div>
        </div>
    </div>
}

export default Header;