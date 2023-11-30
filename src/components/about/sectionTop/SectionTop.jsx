import PersonalInfos from "./information/PersonalInfos"
import SideItems from "./sideItems/SideItems"

const SectionTop = ({ personalData, sideData }) => {
    return (
        <section className="mt-4 flex flex-col lg:flex-row justify-start">
            <PersonalInfos data={personalData} />
            <SideItems data={sideData} />
        </section>
    )
}

export default SectionTop