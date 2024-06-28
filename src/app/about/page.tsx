import React from 'react'
import Title from '@/common/Title/Title'
import { GoPerson } from "react-icons/go";
import Info from '@/components/Info/Info';
import { IoCodeSlash } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import Link from 'next/link';
import { FaGraduationCap } from "react-icons/fa";
import { PiBuildings } from "react-icons/pi";
import { RiBookOpenLine } from "react-icons/ri";

const Experience = () => {
    return (
        <>
            <li className='border-b-[1px] border-b-[#00000011] py-4 md:py-6'>
                <Info
                    title='Founder | Job Hub Center'
                    company='jobhubcenter.com'
                    companyIcon={<PiBuildings className='text-gray text-[17px] md:text-[20px]' />}
                    desc={
                        <>
                            <li>
                                <p className='text-[13px] md:text-[15px] text-gray'>
                                    - I coded "jobhubcenter.com" from scratch, and the purpose of this site is to make it easier for people to find jobs.
                                </p>
                            </li>
                        </>
                    }
                    date='Mar 2024 - Present'
                    icon={<IoCodeSlash className='text-[21px] flex-shrink-0 flex items-center justify-center h-[25px] md:h-[30px]' />}
                />
            </li>

            <li className='border-b-[1px] border-b-[#00000011] py-4 md:py-6'>
                <Info
                    title='Front-End React.js & Next.js Developer'
                    company='esam-innovations.com'
                    companyIcon={<PiBuildings className='text-gray text-[17px] md:text-[20px]' />}
                    desc={
                        <>
                            <li>
                                <p className='text-[13px] md:text-[15px] text-gray'>
                                    - I developed the front-end part of the 'Ən Tez Xidmət' project, which is used by people in many parts of the country."
                                </p>
                                <p className='text-[13px] md:text-[15px] text-gray mt-2'>
                                    - I participated in many different projects using the latest technologies.
                                </p>
                            </li>
                        </>
                    }
                    date='Apr 2022 - Jun 2022'
                    icon={<IoCodeSlash className='text-[21px] flex-shrink-0 flex items-center justify-center h-[25px] md:h-[30px]' />}
                />
            </li>

            <li className='border-b-[1px] border-b-[#00000011] py-4 md:py-6'>
                <Info
                    title='Front-End Developer | Internship'
                    company='Proton.az'
                    date='Feb 2023 - Apr 2023'
                    companyIcon={<PiBuildings className='text-gray text-[17px] md:text-[20px]' />}
                    icon={<IoCodeSlash className='text-[21px] flex-shrink-0 flex items-center justify-center h-[25px] md:h-[30px]' />}
                />
            </li>

            <li className='border-b-[1px] border-b-[#00000011] py-4 md:py-6'>
                <Info
                    title='Front-End | Teacher'
                    company='dma.gov.az'
                    companyIcon={<PiBuildings className='text-gray text-[17px] md:text-[20px]' />}
                    desc={
                        <>
                            <li>
                                <p className='text-[13px] md:text-[15px] text-gray'>
                                    - I taught the 60-hour curriculum. Topics were Html 5 Css and JavaScript.
                                </p>
                            </li>
                        </>
                    }
                    date='Apr 2022 - Jun 2022'
                    icon={<IoCodeSlash className='text-[21px] flex-shrink-0 flex items-center justify-center h-[25px] md:h-[30px]' />}
                />
            </li>

            <li className='border-b-[1px] border-b-[#00000011] py-4 md:py-6'>
                <Info
                    title='Front-End Developer | Internship'
                    company='logix.az'
                    companyIcon={<PiBuildings className='text-gray text-[17px] md:text-[20px]' />}
                    desc={
                        <>
                            <li>
                                <p className='text-[13px] md:text-[15px] text-gray'>
                                    - During my time working as a freelancer, I developed more than 10+ websites.
                                </p>
                            </li>
                        </>
                    }
                    date='Feb 2022 - May 2022'
                    icon={<IoCodeSlash className='text-[21px] flex-shrink-0 flex items-center justify-center h-[25px] md:h-[30px]' />}
                />
            </li>

            <li className='py-4 md:py-6'>
                <Info
                    title='Front-End Developer'
                    company='Free Lancer'
                    companyIcon={<PiBuildings className='text-gray text-[17px] md:text-[20px]' />}
                    desc={
                        <>
                            <li>
                                <p className='text-[13px] md:text-[15px] text-gray'>
                                    - During my time working as a freelancer, I developed more than 10+ websites.
                                </p>
                            </li>
                            <li>
                                <Link target='_blank' href={'https://www.tonnyblack.com.tr/Default.aspx'} className='text-[15px] text-gray flex items-center gap-2 hover:text-black transition-all'>
                                    - <FaLink className='text-[15px] text-gray ' /> tonnyblack.com
                                </Link>
                            </li>
                            <li>
                                <Link target='_blank' href={'https://seesawprotocol.io/'} className='text-[15px] text-gray flex items-center gap-2 hover:text-black transition-all'>
                                    - <FaLink className='text-[15px] text-gray ' /> seesawprotocol.io
                                </Link>
                            </li>
                            <li>
                                <Link target='_blank' href={'https://au-rum.vercel.app/'} className='text-[15px] text-gray flex items-center gap-2 hover:text-black transition-all'>
                                    - <FaLink className='text-[15px] text-gray ' /> au-rum.vercel.app
                                </Link>
                            </li>
                            <li>
                                <Link target='_blank' href={'https://www.medresetuzzehra.com/'} className='text-[15px] text-gray flex items-center gap-2 hover:text-black transition-all'>
                                    - <FaLink className='text-[15px] text-gray ' /> medresetuzzehra.com
                                </Link>
                            </li>
                            <li>
                                <Link target='_blank' href={'https://entez.az/'} className='text-[15px] text-gray flex items-center gap-2 hover:text-black transition-all'>
                                    - <FaLink className='text-[15px] text-gray ' /> entez.az
                                </Link>
                            </li>
                            <li>
                                <Link target='_blank' href={'https://green-card.vercel.app/'} className='text-[15px] text-gray flex items-center gap-2 hover:text-black transition-all'>
                                    - <FaLink className='text-[15px] text-gray ' /> green-card.vercel.app
                                </Link>
                            </li>
                            <li>
                                <Link target='_blank' href={'https://makonu.vercel.app/'} className='text-[15px] text-gray flex items-center gap-2 hover:text-black transition-all'>
                                    - <FaLink className='text-[15px] text-gray ' /> makonu.vercel.app
                                </Link>
                            </li>
                            <li>
                                <Link target='_blank' href={'https://geo-pro.vercel.app/'} className='text-[15px] text-gray flex items-center gap-2 hover:text-black transition-all'>
                                    - <FaLink className='text-[15px] text-gray ' /> geo-pro.vercel.app
                                </Link>
                            </li>
                            <li>
                                <Link target='_blank' href={'https://parkevents.vercel.app/'} className='text-[15px] text-gray flex items-center gap-2 hover:text-black transition-all'>
                                    - <FaLink className='text-[15px] text-gray ' /> parkevents.vercel.app
                                </Link>
                            </li>
                            <li>
                                <Link target='_blank' href={'https://viona-mebel.vercel.app/'} className='text-[15px] text-gray flex items-center gap-2 hover:text-black transition-all'>
                                    - <FaLink className='text-[15px] text-gray ' /> viona-mebel.vercel.app
                                </Link>
                            </li>
                        </>
                    }
                    date='Mar 2021 - Feb 2022'
                    icon={<IoCodeSlash className='text-[21px] flex-shrink-0 flex items-center justify-center h-[25px] md:h-[30px]' />}
                />
            </li>
        </>
    )
}

const Education = () => {
    return (
        <>
            <li className='py-4 md:py-6 border-b-[1px] border-b-[#00000011]'>
                <Info
                    title='Western Caspian University'
                    companyIcon={<RiBookOpenLine className='text-gray text-[17px] md:text-[20px]' />}
                    company="Bachelor's degree, Computer Engineering"
                    date='Sep 2018 - Jul 2022'
                    icon={<FaGraduationCap className='text-[21px] flex-shrink-0 flex items-center justify-center h-[25px] md:h-[30px]' />}
                />
            </li>

            <li className='py-4 md:py-6'>
                <Info
                    title='ATL Academy'
                    companyIcon={<RiBookOpenLine className='text-gray text-[17px] md:text-[20px]' />}
                    company="Front-End Bootcamp"
                    date='Jun 2024 - Aug 2024'
                    icon={<FaGraduationCap className='text-[21px] flex-shrink-0 flex items-center justify-center h-[25px] md:h-[30px]' />}
                />
            </li>
        </>
    )
}

const page = () => {
    return (
        <>
            <Title title={'About'} icon={<GoPerson className='text-[25px]' />} />
            <main className="container px-4 py-5 md:py-7 gap-10">
                <div>
                    <h3 className='text-black font-medium text-[21px] md:text-[24px]'>Experience</h3>
                    <ul>
                        {Experience()}
                    </ul>
                </div>
                <div>
                    <h3 className='text-black font-medium text-[21px] md:text-[24px] mt-4'>Education</h3>
                    <ul>
                        {Education()}
                    </ul>
                </div>
            </main>
        </>
    )
}

export default page