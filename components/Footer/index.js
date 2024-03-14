import Image from 'next/image';
import '@/styles/globals.css';

const Footer = () => {
    return <div className='flex bg-red-900 text-white space-x-20 justify-center text-sm'>
        <div className='py-20'>
            <Image src={'/images/logo-full.jpg'} alt='logo' width={300} height={200}/>
        </div>
        <div className='flex-col py-20 w-80'>
            <div className='font-bold text-2xl pb-2'>CONTACT US</div>
            <div>Block 2 Lot 8 Violago Homes Brgy. Bagong Silangan, Quezon City</div>
            <div className='pt-2'>ebkglass@gmail.com</div>
            <div>ebkbuildersopc@gmail.com</div>
            <div className='pt-2'>(+63) 956-156-3877 / (+53) 976-233-5756</div>
        </div>
        <div className='flex-col py-20 w-60 space-y-2'>
            <div className='font-bold text-2xl pb-2'>QUICK LINKS</div>
            <div>About Us</div>
            <div>Service Offered</div>
            <div>Clients</div>
        </div>
        <div className='flex-col w-60 py-20'>
            <div className='font-bold text-2xl pb-2'>WORK GALLERY</div>
        </div>
    </div>
}

export default Footer;