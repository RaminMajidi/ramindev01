import Title from "../Title"
import BasicItem from "./BasicItem";
import BasicList from "./BasicList";

const BasicSkills = ({ data, title }) => {

    return (
        <article className="w-full">
            <Title title={title} />
            <BasicList>
                {data.map(item => (
                    <BasicItem
                        key={"b_s_" + item.title}
                        title={item.title}
                        url={item.img}
                    />
                ))}
            </BasicList>
        </article>
    )
}

export default BasicSkills