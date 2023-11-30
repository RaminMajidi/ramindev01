
const InfoItem = ({ title, value }) => {
    return (
        <li className="w-full min-[600px]:w-[50%] px-5 py-2 text-base 
            md:text-lg md:px-2 font-bold">
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