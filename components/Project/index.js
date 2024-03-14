"use client";

import Image from 'next/image';
import '@/styles/globals.css';

const Project = () => {
    return (
        <div className='flex-col'>
            <div className='flex bg-zinc-800 space-x-20 justify-center h-60'>
                <Image src={'/images/banner/project.png'} alt={'projects'} width={1500} height={200}/>
            </div>
            <div className='flex space-x-20 justify-center pt-20'>
                <div className='flex-col w-80 h-80'>
                    <Image src={'/images/projects/2d.jpeg'} alt={'projects'} width={1500} height={200}/>
                    <div className='flex justifify-center p-5 font-bold'>Batasan Hills, Barangay Hall</div>
                </div>
                <div className='flex-col w-80 h-80'>
                    <Image src={'/images/projects/2b.jpeg'} alt={'projects'} width={1500} height={200}/>
                    <div className='flex justifify-center p-5 font-bold'>Rural Bank of Baler</div>
                </div>
                <div className='flex-col w-80 h-80'>
                    <Image src={'/images/projects/2a.jpeg'} alt={'projects'} width={1500} height={200}/>
                    <div className='flex justifify-center p-5 font-bold'>PMMA, North Harbor</div>
                </div>
            </div>
            <div className='flex space-x-20 justify-center pt-20'>
                <div className='flex-col w-80 h-80'>
                    <Image src={'/images/projects/2d.jpeg'} alt={'projects'} width={1500} height={200}/>
                    <div className='flex justifify-center p-5 font-bold'>One Stop Shop, Camp Crame</div>
                </div>
                <div className='flex-col w-80 h-80'>
                    <Image src={'/images/projects/2b.jpeg'} alt={'projects'} width={1500} height={200}/>
                    <div className='flex justifify-center p-5 font-bold'>San Mateo, Rizal</div>
                </div>
                <div className='flex-col w-80 h-80'>
                    <Image src={'/images/projects/2a.jpeg'} alt={'projects'} width={1500} height={200}/>
                    <div className='flex justifify-center p-5 font-bold'>Bakasyunan Resort</div>
                </div>
            </div>
            <div className='flex space-x-20 justify-center pt-20'>
                <div className='flex-col w-80 h-80'>
                    <Image src={'/images/projects/2d.jpeg'} alt={'projects'} width={1500} height={200}/>
                    <div className='flex justifify-center p-5 font-bold'>E Bingo, Cainta Rizal</div>
                </div>
                <div className='flex-col w-80 h-80'>
                    <Image src={'/images/projects/2b.jpeg'} alt={'projects'} width={1500} height={200}/>
                    <div className='flex justifify-center p-5 font-bold'>David Salon, Double Dragon Building Pasay City</div>
                </div>
                <div className='flex-col w-80 h-80'>
                    <Image src={'/images/projects/2a.jpeg'} alt={'projects'} width={1500} height={200}/>
                    <div className='flex justifify-center p-5 font-bold'>Beverly Place, Mexico Pampanga</div>
                </div>
            </div>
            <div className='flex space-x-20 justify-center py-20'>
                <div className='flex-col w-80 h-80'>
                    <Image src={'/images/projects/2d.jpeg'} alt={'projects'} width={1500} height={200}/>
                    <div className='flex justifify-center p-5 font-bold'>Urdaneta, Pangasinan</div>
                </div>
                <div className='flex-col w-80 h-80'>
                    <Image src={'/images/projects/2b.jpeg'} alt={'projects'} width={1500} height={200}/>
                    <div className='flex justifify-center p-5 font-bold'>Marsada Hustle House</div>
                </div>
                <div className='flex-col w-80 h-80'>
                    <Image src={'/images/projects/2a.jpeg'} alt={'projects'} width={1500} height={200}/>
                    <div className='flex justifify-center p-5 font-bold'>Container Hope</div>
                </div>
            </div>
        </div>
    );
}

export default Project;