import { useAppContext } from "../../../../context/app/AppContext"
import Title from "../Title"
import ExperienceItem from "./ExperienceItem"
import ExperienceList from "./ExperienceList"


const Experience = ({ data, title }) => {

    const { language } = useAppContext()

    return (
        <article className="w-full p-1">
            <Title title={title} />
            <ExperienceList>
                {data.map(item => (
                    <ExperienceItem
                        key={"Exp_" + item.id}
                        sYear={item[language + "_sYear"]}
                        eYear={item[language + "_eYear"]}
                        title={item[language + "_title"]}
                        college={item[language + "_college"]}
                        desc={item[language + "_desc"]}
                    />
                ))}
            </ExperienceList>
        </article>
    )
}

export default Experience