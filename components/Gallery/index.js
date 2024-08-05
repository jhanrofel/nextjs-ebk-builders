"use client";

import Image from 'next/image';
import '@/styles/globals.css';
import { useRouter } from 'next/navigation';

const Gallery = ({ galleryId }) => {
    const router = useRouter();

    const data = [
        {
            id: '1',
            title: 'Casa Borbon - San Isidro, Batangas',
            count: 8,
        },
        {
            id: '2',
            title: 'Container of Hope - Sto. Tomas, Batangas',
            count: 4,
        },
        {
            id: '3',
            title: 'HOM-COR Doors',
            count: 7,
        },
        {
            id: '4',
            title: 'Iloilo Project - Jaro City, Iloilo',
            count: 7,
        },
        {
            id: '5',
            title: 'Marsada Hustle House - Quezon City',
            count: 6,
        },
        {
            id: '6',
            title: "Peu Brut 05 - Nature's Farm Magallanes, Cavite",
            count: 8,
        },
        {
            id: '7',
            title: "Peu Brut 05 - Nature's Farm Magallanes, Cavite",
            count: 8,
        },
        {
            id: '8',
            title: "Two - Storey Residence - Antipolo Rizal",
            count: 6,
        },
    ]

    const dataGallery = data.filter((items) => items.id === galleryId);

    const listItems = ['main'];
    for (let i = 1; i <= dataGallery[0].count; i++) {
        listItems.push(i);
    }

    return (
        <div className='flex-col'>
            <div className='banner'>
                <Image src={'/images/banner/gallery.png'} alt={'projects'} width={1500} height={200}/>
            </div>
            <div className='flex justify-center text-xl md:text-4xl font-bold my-10 mx-10'>
                {dataGallery[0].title}
            </div>
            <div className='grid grid-cols-1 justify-items-center pb-20 md:grid-cols-3'>
                {listItems.map((items) => {
                    return (
                        <div key={items} className='flex-col justifify-center items-center w-80 h-80'>
                            <div className='bg-gray-800 relative w-80 h-60'>
                                <Image
                                    src={`/images/gallery/${galleryId}/${items}.jpeg`}
                                    alt={`${galleryId} - ${items} Image`}
                                    fill
                                    sizes='100'
                                />
                            </div>                    
                        </div> 
                    )
                })}
            </div>
        </div>
    );
}

export default Gallery;