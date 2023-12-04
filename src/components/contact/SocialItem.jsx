import { Link } from 'react-router-dom'

export const SocialItem = ({ title, link, iconName, iconType }) => {
    return (
        <Link
            title={title}
            to={link}
            target={"_blank"}
            className="border-none outline-none cursor-pointer w-8
                 h-8 flex items-center justify-center rounded-full
                 mx-1 transition-all ease-in-out duration-500 
                 bg-[var(--color-gray)] hover:scale-110
                 hover:bg-[var(--color-primary)] "
        >
            <box-icon
                color="var(--color-main)"
                size="1.5rem"
                type={iconType}
                name={iconName}
            >
            </box-icon>
        </Link>
    )
}
