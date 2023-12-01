import { useAppContext } from '../../../context/app/AppContext'
import { useTranslation } from "react-i18next";

const BtnSetting = () => {
    const { showSetting, toggleSetting } = useAppContext()
    const { t } = useTranslation();
    return (
        <span
            title={t("settings.title")}
            onClick={toggleSetting}
            className={`fixed flex justify-center items-center
                    w-12 h-12 bg-[var(--color-gray)] rounded-full 
                    top-3 left-3  cursor-pointer z-50 
                    ${showSetting ? 'bg-[var(--color-primary)]' :
                    'animate-spin-slow  bg-[var(--color-gray)]'}`}>
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