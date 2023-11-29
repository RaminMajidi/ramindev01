import { COLORS } from "../../../data/data"
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../../context/app/AppContext";
import SelectBody from "./SelectBody";


const SelectColor = () => {
    const { t } = useTranslation();
    const { changeColor } = useAppContext();


    return (
        <SelectBody title={t("settings.selectColor.title")}>
            {COLORS.map(color => (
                <span
                    key={color}
                    onClick={() => changeColor(color)}
                    className="ml-[2px]  cursor-pointer inline-block">
                    <box-icon
                        size="28px"
                        name='droplet-half'
                        type='solid'
                        color={color} >
                    </box-icon>
                </span>
            ))}
        </SelectBody>
    )
}

export default SelectColor