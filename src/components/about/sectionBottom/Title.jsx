import React from 'react'

const Title = ({ title }) => {
    return (
        <>
            <hr className='w-[80%] mx-auto my-8 border-[var(--color-gray)]' />
            <h3 className='text-[var(--color-text)] font-bold text-center text-2xl p-1 mb-8'>
                {title}
            </h3>
        </>
    )
}

export default Title