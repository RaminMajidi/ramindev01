import React from 'react'
import PortfolioItem from './PortfolioItem';

const PortfolioList = ({ data }) => {

    return (
        <article className="grid grid-cols-12 gap-4 pb-10">
            {
                data?.map((item) => (
                    <PortfolioItem item={item} />
                ))
            }
        </article>
    )
}

export default PortfolioList