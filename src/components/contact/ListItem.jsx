import { Link } from "react-router-dom"
import { motion } from "framer-motion"



const ListItem = ({ iconName, iconType, title, text, isLink = false, link, font }) => {
    return (
        <motion.div
            initial={{ scale: -1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex w-full items-center my-1">
            <div>
                <box-icon
                    color="var(--color-primary)"
                    size="1.7rem"
                    type={iconType}
                    name={iconName}
                >
                </box-icon>
            </div>
            <div className="px-2 flex justify-center items-center gap-1">
                <h4 className="py-1 text-xs sm:text-sm md:text-base lg:text-lg">
                    {title + " : "}
                </h4>
                {isLink ?
                    (
                        <Link
                            className={`${font} text-xs sm:text-sm md:text-base 
                            lg:text-lg text-[var(--color-gray)]`}
                            to={link}
                            target="_blank">
                            {text}
                        </Link>
                    ) :
                    (
                        <p className={` py-1 lg:font-bold text-[var(--color-gray)]`}>
                            {text}
                        </p>
                    )
                }
            </div>
        </motion.div >
    )
}

export default ListItem