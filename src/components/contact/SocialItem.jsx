import { Link } from 'react-router-dom'

export const SocialItem = ({ title, link, iconName, iconType }) => {
    return (
        <Link
            title={title}
            to={link}
            target={"_blank"}
            className="border-none outline-none cursor-pointer w-10
                 h-10 flex items-center justify-center rounded-full
                 ml-4 transition-all ease-in-out duration-500 
                 bg-[var(--color-gray)] hover:scale-125 focus:scale-125 
                 hover:bg-[var(--color-primary)] focus:bg-[var(--color-orange)]"
        >
            <box-icon
                color="var(--color-main)"
                size="1.7rem"
                type={iconType}
                name={iconName}
            >
            </box-icon>
        </Link>
    )
}
