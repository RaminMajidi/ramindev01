import React from 'react'
import { useAppContext } from '../../context/app/AppContext'

const DeatilsItem = ({ title, value, children, iconName, iconType, valueFont }) => {
    const { language } = useAppContext()
    return (
        <div className={`my-1 w-full h-10 flex max-w-max`}
        >
            <span className='px-1'>
                <box-icon
                    color="var(--color-primary)"
                    size="sm"
                    type={iconType}
                    name={iconName}>
                </box-icon>
            </span>
            <p className="text-base text-justify">
                <span className=''>
                    {title + " : "}
                </span>
                <span className={`text-[var(--color-gray)] ${valueFont}`}>
                    {value}
                    {children}
                </span>
            </p>
        </div>
    )
}

export default DeatilsItem