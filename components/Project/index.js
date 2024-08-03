"use client";

import Image from 'next/image';
import '@/styles/globals.css';
import { useRouter } from 'next/navigation';

const Project = () => {
    const router = useRouter();

    const data = [
        {
            id: 1,
            title: 'Casa Borbon - San Isidro, Batangas',
        },
        {
            id: 2,
            title: 'Container of Hope - Sto. Tomas, Batangas',
        },
        {
            id: 3,
            title: 'HOM-COR Doors',
        },
        {
            id: 4,
            title: 'Iloilo Project - Jaro City, Iloilo',
        },
        {
            id: 5,
            title: 'Marsada Hustle House - Quezon City',
        },
        {
            id: 6,
            title: "Peu Brut 05 - Nature's Farm Magallanes, Cavite",
        },
        {
            id: 7,
            title: "Peu Brut 05 - Nature's Farm Magallanes, Cavite",
        },
        {
            id: 8,
            title: "Two - Storey Residence - Antipolo Rizal",
        },
    ]

    const onClickHandler = (id) => {
        router.push(`/gallery/${id}`);
    }

    return (
        <div className='flex-col'>
            <div className='banner'>
                <Image src={'/images/banner/project.png'} alt={'projects'} width={1500} height={200}/>
            </div>
            <div className='grid grid-cols-1 justify-items-center py-20 md:grid-cols-3'>
                {
                    data.map((item) => {
                        return (
                            <div key={item.id} className='flex-col justifify-center items-center w-80 h-80 hover:cursor-pointer' onClick={() => onClickHandler(item.id)}>
                                <div className='bg-gray-800 relative w-80 h-60'>
                                    <Image
                                        src={`/images/gallery/${item.id}/main.jpeg`}
                                        alt={`${item.title} Image`}                            
                                        layout="fill"
                                        objectFit="contain"
                                        objectPosition="center"
                                    />
                                </div>                    
                                <div className='justify-center p-5 font-bold'>{item.title}</div>
                            </div>                            
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Project;