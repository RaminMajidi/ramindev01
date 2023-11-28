import { useAppContext } from '../../../context/app/AppContext'
import Modal from '../Modal/Modal'
import "./SettingMenu.css"

const COLORS = ['#0087ff', '#FF9209', '#7752FE', '#F4CE14', '#FF0303']

const SettingMenu = () => {
    const { showSetting, toggleSetting, changeColor } = useAppContext()
    return (
        <Modal
            title={"تنظیمات"}
            open={showSetting}
            isToggle={toggleSetting}
        >
            <p>Hello from modal</p>
        </Modal>
    )
}

export default SettingMenu