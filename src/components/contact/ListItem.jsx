import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useAppContext } from "../../context/app/AppContext"



const ListItem = ({ iconName, iconType, title, text, isLink = false, link, font }) => {

    const { language } = useAppContext()

    return (
        <motion.div
            initial={{ scale: -1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
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
                        <p className={`py-1 text-xs sm:text-sm md:text-base lg:text-lg
                          text-[var(--color-gray)] ${language == "fa" ? 'font-bold' : ''}`}>
                            {text}
                        </p>
                    )
                }
            </div>
        </motion.div >
    )
}

export default ListItem