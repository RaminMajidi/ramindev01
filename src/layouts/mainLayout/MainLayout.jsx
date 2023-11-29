import { Outlet } from "react-router-dom"
import Navbar from "../../components/design/Navbar/Navbar"
import BtnSetting from "../../components/Btns/BtnSetting/BtnSetting"
import { useAppContext } from "../../context/app/AppContext"
import SettingMenu from "../../components/design/SettingMenu/SettingMenu"


const MainLayout = () => {
    const { showSetting } = useAppContext()
    return (
        <section className="relative mx-auto lg:container w-full h-[88dvh] 
        lg:h-[100dvh] overflow-x-hidden overflow-y-auto">
            <BtnSetting />
            <SettingMenu />
            <Navbar />
            <Outlet />
        </section>
    )
}

export default MainLayout