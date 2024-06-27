import React from 'react'
import Title from '@/common/Title/Title'
import { GoPerson } from "react-icons/go";

const page = () => {
    return (
        <>
            <Title title={'About'} icon={<GoPerson className='text-[25px]' />} />
        </>
    )
}

export default page