'use client'

import React from 'react'
import { Grid } from 'react-loader-spinner'

const loading = () => {
    return (
        <div className='absolute text-white top-0 left-0 w-full h-[100%] bg-opacity-60 backdrop-blur-sm  grid place-items-center '>
            <Grid
                visible={true}
                height="50"
                width="50"
                color="#B3B6B7"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperClass="grid-wrapper"
            />
        </div>
    )
}

export default loading