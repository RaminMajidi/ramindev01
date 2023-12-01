

const ItemBorder = () => {
    return (
        <div className="relative h-full">
            <i className='absolute z-10 top-0 right-0 w-8 h-full rounded-full 
                  bg-[var(--color-orange)] text-center text-xl bx 
                  bxs-briefcase'>
            </i>
            <span className="absolute top-1 right-[0.85rem] rounded-3xl 
                    w-1 bg-[var(--color-primary)] h-full border 
                    border-[var(--color-primary)]">
            </span>
        </div>
    )
}

export default ItemBorder