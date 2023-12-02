import React from 'react'

const WSBaner = ({ url, title }) => {
    return (
        <div className='relative rounded-2xl bg-[var(--color-primary)] 
        w-full md:h-[75dvh]'>
            <img
                className='w-full h-full rounded-2xl'
                src={"/" + url}
                alt={"baner_" + title}
            />

        </div>
    )
}

export default WSBaner