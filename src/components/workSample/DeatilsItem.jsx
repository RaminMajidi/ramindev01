import React from 'react'

const DeatilsItem = ({ title, value, children, iconName, iconType }) => {
    return (
        <div className="p-1 my-1 w-full h-10 flex items-center max-w-max
         work_rtl"
        >
            <span className='flex items-center justify-center mx-2 '>
                <box-icon
                    color="var(--color-primary)"
                    size="sm"
                    type={iconType}
                    name={iconName}>
                </box-icon>
            </span>
            <p className="my-2 text-base ">
                <span className='font-[Poppins]'>
                    {title}
                </span>
                <span className='text-[var(--color-gray)] font-[Poppins]'>
                    {value}
                    {children}
                </span>
            </p>
        </div>
    )
}

export default DeatilsItem