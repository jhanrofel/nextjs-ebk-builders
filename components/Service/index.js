"use client";

import Image from 'next/image';
import '@/styles/globals.css';

const Service = () => {
    return (
        <div className='flex-col'>
            <div className='flex bg-zinc-800 space-x-20 justify-center h-60'>
                <Image src={'/images/banner/service.png'} alt={'about'} width={1500} height={200}/>
            </div>
            <div className='flex space-x-20 justify-center py-20'>
                <div className='w-2/6 text-justify'>
                    <p className='text-center text-3xl font-bold py-5'>uPVC Windows & Doors</p>
                    <li>Material is made out of Un-Plasticized Poly-Vinyl Chloride with chemical coating for
                    UV rays, which makes the profiles withstand warping and discoloration.</li>
                    <li>It is corrosion-free under adverse climatic conditions such as coastal areas and
                    highly polluted industrial areas.</li>
                    <li>UPVC is fire resistant and non-combustible since it contains chlorine. The required
                    temperature for UPVC to ignite is much higher than that required for wood. Once on
                    fire, UPVC profiles are self-extinguishing for fires.</li>
                    <li>Unlike wood, UPVC is termite-free.</li>
                    <li>The lifetime of UPVC is twice than that of some aluminum, and three times longer
                    than wood.</li>
                    <li>Profile have hollowed section design/ multi- chambered sections wherein steel
                    reinforcement bars are inserted for durability.</li>
                    <li>The hollowed sections also provide good thermal insulation. Heat is trapped in the
                    chambers and is not conducted and dissipated. UPVC is a good insulator of heat.
                    Energy is efficiently used because temperature inside is maintained.</li>
                    <li>UPVC windows/doors are constructed through the use of automated-fusion welding.
                    Welded corners and airtightness through the use of rubber seal and gaskets assure
                    that windows/doors are leak and draught-free.</li>
                    <li>Dust and pollen infusion are reduced due to airtightness.</li>
                    <li>Noise is reduced through the use of gaskets and rubber.</li>
                    <li>Uses multi-point locking mechanism for security.</li>
                    <li>Easy to maintain and clean. Material is self-colored, no painting or polishing
                    needed.</li>
                </div>
                <div className='w-3/6'>
                    <Image src={'/images/hero/3.png'} alt={'about'} width={1500} height={200}/>
                </div>
            </div>
            <div className='flex space-x-20 justify-center py-20'>
                <div className='w-3/6'>
                    <Image src={'/images/hero/2.png'} alt={'about'} width={1500} height={200}/>
                </div>
                <div className='w-2/6 text-justify'>
                    <p className='text-center text-3xl font-bold py-5'>ALUMINUM WINDOWS & DOORS</p>
                    <li>Aluminum Windows and Doors is popular because of its low maintenance.</li>
                    <li>It is long lasting & reliable.</li>
                    <li>Strong & durable.</li>
                    <li>Resist deterioration.</li>
                    <li>Slim frames complement modern architectural styles.</li>
                    <li>Durable factory applied color options.</li>
                </div>
            </div>
            <div className='flex space-x-20 justify-center py-20'>
                <div className='w-2/6 text-justify'>
                    <p className='text-center text-3xl font-bold py-5'>SHOWER ENCLOSURE</p>
                    <li>Frameless Shower Enclosure</li>
                    <li>Sliding Shower Enclosure</li>
                    <li>Swing Type Shower Enclosure</li>
                    <p className='text-center text-3xl font-bold py-5 pt-20'>STAIR RAILING</p>
                    <li>Using Stainless Steel Railing</li>
                    <li>Using Frameless Glass only</li>

                    <p className='text-center text-3xl font-bold py-5 pt-20'>BLINDS</p>
                    <li>Combi Blinds</li>
                    <li>Roller Blinds</li>
                    <li>Blackout</li>
                </div>
                <div className='w-3/6'>
                    <Image src={'/images/hero/1.png'} alt={'about'} width={1500} height={200}/>
                </div>
            </div>
            <div className='flex space-x-20 justify-center py-20'>
                <div className='w-3/6'>
                    <Image src={'/images/hero/4.png'} alt={'about'} width={1500} height={200}/>
                </div>
                <div className='w-2/6 text-justify'>
                    <p className='text-center text-3xl font-bold py-5'>BUILDING CONSTRUCTION</p>
                    <li>Residential Construction</li>
                    <li>Commercial Construction</li>
                    <li>Industrial Construction</li>
                    <li>Construction Supplies</li>
                </div>
            </div>
        </div>
    );
}

export default Service;