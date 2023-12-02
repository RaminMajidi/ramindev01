import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioItem = ({ item }) => {
    return (
        <Link className='relative col-span-12 sm:col-span-6  lg:col-span-4
            rounded-xl group'
            to={`/Portfolio/${item.title}`}
            state={item}
        >
            <div className='absolute w-full h-full bg-[var(--color-primary)] rounded-xl
            flex justify-center items-center opacity-0 group-hover:opacity-90
            transition-all ease-in-out duration-700'>
                <h3 className='text-2xl font-["Poppins"] text-white'>
                    {item.title}
                </h3>
            </div>
            <img
                className='w-full h-full rounded-xl'
                src={item.coverImg} alt="" />
        </Link>
    )
}

export default PortfolioItem