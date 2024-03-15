"use client";

import Image from 'next/image';
import '@/styles/globals.css';

const About = () => {
    return (
        <div className='flex-col'>
            <div className='banner'>
                <Image src={'/images/banner/about.png'} alt={'about'} width={1500} height={200}/>
            </div>
            <div className='about_item flex-col'>
                <div className='about_item_text'>
                    <p className='about_item_text_title'>BACKGROUND</p>
                    <p>
                        <b>EBK Builders OPC,</b> formerly recognized as EBK Glass and Aluminum Installation
                        Services, has been in operation since February 2017. As part of our commitment to
                        continuous improvement and expansion, we have undertaken a strategic rebranding
                        initiative. This evolution reflects our dedication to providing an enhanced range of
                        services, aimed at assisting individuals in realizing their vision of an inviting and
                        comfortable home environment.<br /><br />
                        <b>Mr. Eduardo M. Baesa</b> initially started the business by doing Glass and
                        Aluminum Installation Services and eventually expand its potential in doing
                        Construction.<br /><br />
                        The core activity of <b>EBK Builders OPC</b> is providing high quality workmanship and
                        short lead time for building uPVC and Aluminum fabrication and installation of windows
                        and doors, shower enclosure, patch fitting, glass partition, stair railings, kitchen glass
                        cabinet, roll up blinds and any related requirement, including building construction.
                        During this period, it has steadily increased its clientele through dedication to
                        customers and hard work.
                    </p>
                </div>
                <div className='about_item_image'>
                    <Image src={'/images/hero/3.png'} alt={'about'} width={1500} height={200}/>
                </div>
            </div>
            <div className='about_item flex-col-reverse'>
                <div className='about_item_image'>
                    <Image src={'/images/hero/2.png'} alt={'mission-statement'} width={1500} height={200}/>
                </div>
                <div className='about_item_text'>
                    <p className='about_item_text_title'>MISSION STATEMENT</p>
                    <p>
                        The key mission of <b>EBK Builders OPC</b> is to be financially sustainable; specializing
                        in Glass & Aluminum Finished products and Building Construction, representative of and
                        identifying with the community and industry we serve, promoting economic growth and
                        socio-economic development by:
                    </p><br />
                    <li>Identifying and implementing development opportunities.</li>
                    <li>Providing a range of glass and aluminum products and services that meet the needs
                        of our clients and stakeholders.</li>
                    <li>An industry leader - supplying superior aluminum and glass products to both the
                        industrial and domestic building industries.</li>
                    <li>To promote skills, transfer and on-going training and development of our staff and
                        to be socially responsible.</li>
                </div>
            </div>
            <div className='about_item flex-col'>
                <div className='about_item_text'>
                    <p className='about_item_text_title'>OUR STAFF</p>
                    <li>We are a successful company, and we are proud of our employees. Our people are
                        highly motivated, well trained, competent and with many years of experience.</li>
                    <li>Our focus at all the times is based on client satisfaction. The company has a close
                        relationship between management and staff who will strive for customer
                        satisfaction.</li>
                    <li>We endeavor to provide from our cleaning staff right up to our top management,
                        with a hands-on approach and being well experienced in the Glass and Aluminum
                        industry.</li>
                    <li>Safety management are taken very seriously, and full manuals of procedures are in
                        place.</li>
                    <li>Staff are fully trained, and an in-house on the job training and development
                        program is also in place.</li>
                </div>
                <div className='about_item_image'>
                    <Image src={'/images/hero/1.png'} alt={'our-staff'} width={1500} height={200}/>
                </div>
            </div>
            <div className='about_item flex-col-reverse'>
                <div className='about_item_image'>
                    <Image src={'/images/hero/4.png'} alt={'key-areas'} width={1500} height={200}/>
                </div>
                <div className='about_item_text'>
                    <p className='about_item_text_title'>KEY AREAS</p>
                    <li>Our staff is fully committed, and our business activities are divided into: Production,
                        Research and Development, Logistics, Marketing, Purchasing, Administration,
                        Finance, Quality Control.</li>
                    <li>Our Flexibility allows management to respond to client needs at relatively short
                        notice.</li>
                    <li>Our very reliable suppliers provide us with ongoing support and the materials used
                        are of the highest quality.</li>
                    <li>All EBK Builders OPC workmanship is guaranteed.</li>
                    <li>Any complaints are rectified as a priority.</li>
                </div>
            </div>
        </div>
    );
}

export default About;