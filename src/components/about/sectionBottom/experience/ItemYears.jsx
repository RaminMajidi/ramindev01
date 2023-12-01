

const ItemYears = ({ sYear, eYear }) => {
    return (
        <div className="flex flex-wrap gap-2 w-full justify-start mb-2">
            <h4 className="bg-[var(--color-pray)] text-xs sm:text-sm 
            md:text-base px-2 py-1 rounded-xl">
                {sYear}
            </h4>
            <h4 className="bg-[var(--color-pray)] text-xs sm:text-sm 
            md:text-base px-2 py-1 rounded-xl ">
                {eYear}
            </h4>
        </div>
    )
}

export default ItemYears