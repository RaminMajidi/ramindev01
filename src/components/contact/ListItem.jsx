import { Link } from "react-router-dom"

const ListItem = ({ iconName, iconType, title, text, isLink = false, link, font }) => {
    return (
        <div className="flex w-full items-center my-1">
            <div>
                <box-icon
                    color="var(--color-primary)"
                    size="2rem"
                    type={iconType}
                    name={iconName}
                >
                </box-icon>
            </div>
            <div className="px-2">
                <h4 className="py-1 text-xs lg:text-lg">
                    {title+" : "}
                </h4>
                {isLink ?
                    (
                        <Link
                            className={`${font} text-[var(--color-gray)]`}
                            to={link}
                            target="_blank">
                            {text}
                        </Link>
                    ) :
                    (
                        <p className={`py-1 lg:font-bold text-[var(--color-gray)]`}>
                            {text}
                        </p>
                    )
                }
            </div>
        </div >
    )
}

export default ListItem