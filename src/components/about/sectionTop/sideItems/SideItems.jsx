import { useAppContext } from "../../../../context/app/AppContext";
import SideItem from "./SideItem";
import { motion } from "framer-motion";

const SideItems = ({ data }) => {
  const { language } = useAppContext()
  return (
    <motion.section
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.3 }}
      className=" w-full lg:w-[60%] grid grid-cols-12 gap-1 px-3 py-2"
    >
      {data.map((item, index) => (
        <SideItem
          key={item.id}
          startValue={0}
          endValue={item.value}
          durationValue={2}
          id={item.id}
          title={item[language + "_title"]}
        />
      ))}
    </motion.section>
  )
}

export default SideItems