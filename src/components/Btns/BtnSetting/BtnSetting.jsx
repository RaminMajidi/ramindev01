import { useAppContext } from '../../../context/app/AppContext'
import { useTranslation } from "react-i18next";

const BtnSetting = () => {
    const { showSetting, toggleSetting } = useAppContext()
    const { t } = useTranslation();

    
    return (
        <span
        title={t("settings.title")}
            onClick={toggleSetting}
            className={`absolute flex justify-center items-center
                    w-12 h-12 bg-[var(--color-gray)] rounded-full 
                    top-2 left-2 lg:left-0 cursor-pointer z-20 
                    ${showSetting ? '' : 'animate-spin-slow '}`}>
            <box-icon
                name='cog'
                type='solid'
                color="#fff"
                size='md'>
            </box-icon>
        </span>
    )
}
export default BtnSetting