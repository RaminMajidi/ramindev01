
const InfoItem = ({ title, value }) => {
    return (
        <li className="w-full min-[460px]:w-[50%] p-1 text-base 
            md:text-lg font-bold">
            <span className="text-[var(--color-gray)]">
                {title}
            </span>
            <span className={`text-[var(--color-text)]`}>
                {value}
            </span>
        </li>
    )
}

export default InfoItem