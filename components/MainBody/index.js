"use client";

import Image from 'next/image';
import '@/styles/globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
const MainBody = () => {
    const heroImages = [
        {
            title: 'hero1',
            location: '/images/hero/1.png',
        },
        {
            title: 'hero2',
            location: '/images/hero/2.png',
        },
        {
            title: 'hero3',
            location: '/images/hero/3.png',
        },
        {
            title: 'hero4',
            location: '/images/hero/4.png',
        },
    ]

    return (
        <div className='flex justify-center'>
            <Carousel className='w-full lg:w-1/2' showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000} showThumbs={false}>
                {heroImages.map((image) => (
                    <div key={image.title}>
                        <Image src={image.location} alt={image.title} width={300} height={200}/>
                    </div>
                ))}
            </Carousel>
        </div>

    );
}

export default MainBody;