import SelectBody from "./SelectBody"
import { useTranslation } from "react-i18next";
import ThemeItem from "./ThemeItem";


const SelectTheme = () => {
    const { t } = useTranslation();
    return (
        <SelectBody title={t("settings.selectTheme.title")}>
            <ThemeItem
                title={t("settings.selectTheme.dark")}
                iconType="solid"
                iconName='moon'
                value="dark"
            />

            <ThemeItem
                title={t("settings.selectTheme.light")}
                iconType="solid"
                iconName='sun'
                value='light'
            />

            <ThemeItem
                title={t("settings.selectTheme.device")}
                iconType="solid"
                iconName='devices'
                value='device'
            />
        </SelectBody>
    )
}

export default SelectTheme