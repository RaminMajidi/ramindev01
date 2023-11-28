import { useAppContext } from '../../../context/app/AppContext'
import Modal from '../Modal/Modal'
import "./SettingMenu.css"
import SelectLanguage from './SelectLanguage'
import { useTranslation } from "react-i18next";
import SelectColor from './SelectColor';


const SettingMenu = () => {
    const { t } = useTranslation();
    const { showSetting, toggleSetting, changeColor } = useAppContext()
    return (
        <Modal
            title={t("settings.title")}
            open={showSetting}
            isToggle={toggleSetting}
        >
            <SelectLanguage />
            <SelectColor />
        </Modal>
    )
}

export default SettingMenu