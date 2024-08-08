"use client";

import Image from 'next/image';
import '@/styles/globals.css';
import { useRouter } from 'next/navigation';
import { galleryData } from '../Gallery/constants';

const Project = () => {
    const router = useRouter();

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
                    galleryData.map((item) => {
                        return (
                            <div key={item.id} className='flex-col justifify-center items-center w-80 h-80 hover:cursor-pointer' onClick={() => onClickHandler(item.id)}>
                                <div className='bg-gray-800 relative w-80 h-60'>
                                    <Image
                                        src={`/images/gallery/${item.id}/main.jpeg`}
                                        alt={`${item.title} Image`}
                                        fill
                                        sizes='100'
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