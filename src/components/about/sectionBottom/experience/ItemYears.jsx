

const ItemYears = ({ sYear, eYear }) => {
    return (
        <div className="flex w-full justify-start mb-2">
            <h4 className="bg-[var(--color-pray)] px-2 py-1 rounded-3xl">
                {sYear}
            </h4>
            <h4 className="bg-[var(--color-pray)] px-2 py-1 rounded-3xl mx-4">
                {eYear}
            </h4>
        </div>
    )
}

export default ItemYears