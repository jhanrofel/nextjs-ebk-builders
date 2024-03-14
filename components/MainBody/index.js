"use client";

import Image from 'next/image';
import '@/styles/globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
const MainBody = () => {
    const heroImages = [
        {
            title: 'hero1',
            location: '/images/hero1.png',
        },
        {
            title: 'hero2',
            location: '/images/hero2.png',
        },
        {
            title: 'hero3',
            location: '/images/hero3.png',
        },
        {
            title: 'hero4',
            location: '/images/hero4.png',
        },
    ]

    return (
        <div className='flex justify-center'>
            <Carousel className='w-1/2' showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000} showThumbs={false}>
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