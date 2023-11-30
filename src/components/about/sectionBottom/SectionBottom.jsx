import { useTranslation } from "react-i18next";
import BasicSkills from "./basicSkills/BasicSkills"
import Experience from "./experience/Experience"
import SubSkills from "./subSkills/Subskills"

const SectionBottom = ({ basicSkillsData, subSkillsData, experienceData }) => {

  const { t } = useTranslation()

  return (
    <section className="mt-8 w-full flex flex-col items-center">
      <BasicSkills
        title={t("about.titels.basicSkills")}
        data={basicSkillsData} />
      <SubSkills
        title={t("about.titels.subSkills")}
        data={subSkillsData} />
      <Experience
        title={t("about.titels.experience")}
        data={experienceData} />
    </section>
  )
}


export default SectionBottom