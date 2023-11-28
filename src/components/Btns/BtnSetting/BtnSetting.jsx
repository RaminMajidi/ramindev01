import { useAppContext } from '../../../context/app/AppContext'
import { useTranslation } from "react-i18next";

const BtnSetting = () => {
    const { showSetting, toggleSetting } = useAppContext()
    const { t } = useTranslation();

    
    return (
        <button
        title={t("settings.title")}
            onClick={toggleSetting}
            className={`absolute flex justify-center items-center
                    w-12 h-12 bg-[var(--color-gray)] rounded-full 
                    top-3 left-2 cursor-pointer z-20 
                    ${showSetting ? '' : 'animate-spin-slow '}`}>
            <box-icon
                name='cog'
                type='solid'
                color="#fff"
                size='md'>
            </box-icon>
        </button>
    )
}
export default BtnSetting