import { Outlet } from "react-router-dom"
import Navbar from "../../components/design/Navbar/Navbar"
import BtnSetting from "../../components/Btns/BtnSetting/BtnSetting"
import SettingMenu from "../../components/design/SettingMenu/SettingMenu"


const MainLayout = () => {
    return (
        <main className="w-full h-[88dvh] lg:min-h-[100dvh] 
        overflow-x-hidden overflow-y-scroll md:overflow-y-visible">
            <section className="relative w-full h-full mx-auto container">
                <BtnSetting />
                <SettingMenu />
                <Navbar />
                <Outlet />
            </section>
        </main>
    )
}

export default MainLayout