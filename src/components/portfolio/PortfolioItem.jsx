import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioItem = ({ item }) => {
    return (
        <Link className='relative col-span-12 sm:col-span-6 md:col-span-4
            rounded-xl group'
            to={`/Portfolio/${item.title}`} >
            <div className='absolute w-full h-full bg-[var(--color-primary)] rounded-xl
            flex justify-center items-center opacity-0 group-hover:opacity-90
            transition-all ease-in-out duration-500'>
                <h3 className='text-lg md:text-2xl font-["Poppins"]'>
                    {item.title}
                </h3>
            </div>
            <img
                className='w-full rounded-xl'
                src={item.coverImg} alt="" />
        </Link>
    )
}

export default PortfolioItem