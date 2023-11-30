import { useAppContext } from "../../../../context/app/AppContext";
import SideItem from "./SideItem";

const SideItems = ({ data }) => {
  const { language } = useAppContext()
  return (
    <section className=" w-full lg:w-[60%] grid grid-cols-12 gap-1 px-3 py-2">
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
    </section>
  )
}

export default SideItems