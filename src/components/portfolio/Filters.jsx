import React from 'react'

const Filters = ({ categorys, filter, filterHandeler, language }) => {
    return (
        <div className={`w-full flex justify-center mx-auto my-10
         flex-wrap ${language == "fa" ? 'flex-row-reverse' : 'flex-row'}`}>
            {
                categorys?.map((item) => (
                    <button
                        key={item + "_Cat"}
                        onClick={() => filterHandeler(item)}
                        className={`${item == filter ? "text-[var(--color-primary)]" :
                            "text-[var(--color-text)]"} text-base md:text-xl font-[Poppins] 
                             tracking-wide my-1 mx-1 p-1 select-none`}>
                        {item}
                    </button>
                ))
            }
        </div>
    )
}

export default Filters