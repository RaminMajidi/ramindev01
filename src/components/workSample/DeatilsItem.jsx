import { motion } from "framer-motion"

const DeatilsItem = ({ title, value, children, iconName, iconType, valueFont }) => {
    return (
        <motion.div
            initial={{ scale: -1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className={`my-1 flex `}
        >
            <span className='px-1'>
                <box-icon
                    color="var(--color-primary)"
                    size="sm"
                    type={iconType}
                    name={iconName}>
                </box-icon>
            </span>
            <p className="text-base">
                <span className=''>
                    {title + " : "}
                </span>
                <span className={` text-[var(--color-gray)] ${valueFont}`}>
                    {value}
                    {children}
                </span>
            </p>
        </motion.div>
    )
}

export default DeatilsItem