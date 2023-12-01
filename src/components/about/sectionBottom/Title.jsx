import React from 'react'

const Title = ({ title }) => {
    return (
        <>
            <hr className='mx-auto my-8 border-2 
            rounded-full border-[var(--color-gray)]'
            />
            <h3 className='text-[var(--color-text)] font-bold
             text-center text-2xl p-1 mb-4'
            >
                {title}
            </h3>
        </>
    )
}

export default Title