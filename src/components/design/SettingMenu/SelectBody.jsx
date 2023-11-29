import React from 'react'

const SelectBody = ({ title, children }) => {
    return (
        <div className='flex justify-between items-center mt-6'>
            <label className='md:text-lg text-[var(--color-text)]'>
                {title}
            </label>
            <div className='flex flex-wrap items-center'>
                {children}
            </div>
        </div>
    )
}

export default SelectBody