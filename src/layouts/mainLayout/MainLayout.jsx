import { Outlet } from "react-router-dom"
import Navbar from "../../components/design/Navbar/Navbar"
import BtnSetting from "../../components/Btns/BtnSetting/BtnSetting"


const MainLayout = () => {
    return (
        <section className="container">
            <BtnSetting />
            <Navbar />
            <article className={`overflow-hidden w-full h-[88dvh] lg:h-[100dvh]  bg-transparent`}>
                <Outlet />
            </article>
        </section>
    )
}

export default MainLayout