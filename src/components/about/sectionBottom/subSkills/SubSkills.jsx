import Title from "../Title"
import { SubItem } from "./SubItem"
import { SubList } from "./SubList"


const SubSkills = ({ data, title }) => {
    return (
        <article className="w-full">
            <Title title={title} />
            <SubList>
                {data.map(item => (
                    <SubItem
                        key={"s_s_" + item.title}
                        title={item.title}
                        url={item.img}
                    />
                ))
                }

            </SubList>
        </article>
    )
}

export default SubSkills