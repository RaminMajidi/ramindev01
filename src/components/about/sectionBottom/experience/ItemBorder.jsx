

const ItemBorder = () => {
    return (
        <div className="relative h-full">

            <span className='absolute z-10 top-0 right-0 w-8 h-8 rounded-full p-[3px]
                  bg-[var(--color-primary)] text-center text-xl flex justify-center'>
                <box-icon
                    color="#fff"
                    size="sm"
                    type="solid"
                    name="briefcase">
                </box-icon>
            </span>
            <span className="absolute top-1 right-[0.85rem] rounded-3xl 
                    w-1 bg-[var(--color-primary)] h-[90%] border 
                    border-[var(--color-primary)]">
            </span>
        </div>
    )
}

export default ItemBorder