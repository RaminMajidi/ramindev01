import { space } from "postcss/lib/list";
import { COLORS } from "../../../data/data"
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../../context/app/AppContext";


const SelectColor = () => {
    const { t } = useTranslation();
    const { changeColor } = useAppContext();


    return (
        <div className='flex justify-between items-center mt-6'>
            <label className='md:text-lg text-[var(--color-text)]'>
                {t("settings.selectColor.title")}
            </label>
            <div className='flex flex-wrap justify-center items-center'>
                {COLORS.map(color => (
                    <span
                        onClick={() => changeColor(color)}
                        className="ml-[2px] cursor-pointer inline-block">
                        <box-icon
                            size="28px"
                            name='droplet-half'
                            type='solid'
                            color={color} >
                        </box-icon>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default SelectColor