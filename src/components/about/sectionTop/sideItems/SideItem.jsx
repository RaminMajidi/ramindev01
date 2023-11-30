import Cunter from '../../../design/Cunter'

const SideItem = ({ startValue, endValue, durationValue, id, title }) => {
    return (
        <div className="border border-[var(--color-primary)] rounded-md p-2 
             max-[350px]:col-span-12 col-span-6 md:col-span-3 
             lg:col-span-6 h-36 m-1 ">
            <h3 className="text-3xl p-1 mt-2 font-bold">
                    <Cunter
                        start={startValue}
                        end={endValue}
                        duration={durationValue}
                        id={id}
                    />
                <span className="text-[var(--color-primary)]">+</span>
            </h3>
            <p className="text-lg text-[var(--color-gray)] p-1 mt-2">
                {title}
            </p>
        </div>
    )
}

export default SideItem