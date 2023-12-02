import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Loading from '../components/design/Loading/Loading'
import WSContainer from "../components/workSample/WSContainer"
import WSBaner from "../components/workSample/WSBaner"
import WSDetails from "../components/workSample/WSDetails"
import DeatilsItem from "../components/workSample/DeatilsItem"
import FlexRowWrap from "./FlexRowWrap"

const WorkSample = () => {
    const { state } = useLocation()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()


    console.log(state);

    useEffect(() => {
        if (!state) {
            navigate('/404')
            setLoading(false)
        } else {
            setData(state)
            setLoading(false)
        }
    }, [state])
    return (
        <>
            {loading && <Loading />}

            {data &&
                <WSContainer>
                    <WSBaner
                        url={data?.coverImg}
                        title={data?.title}
                    />
                    <WSDetails>
                        <FlexRowWrap>
                            <DeatilsItem
                                iconName="sketch"
                                iconType="logo"
                                title={"Title : "}
                                value={data?.title}
                            />
                            <DeatilsItem
                                iconName="category"
                                iconType="solid"
                                title={"Category : "}
                                value={data?.category}
                            />
                            <DeatilsItem
                                iconName="calendar"
                                iconType="solid"
                                title={"Year : "}
                                value={data?.yearOf}
                            />
                            <DeatilsItem
                                iconName="link"
                                iconType=""
                                title={"Link : "}

                            >
                                <Link
                                    className="text-left text-[var(--color-primary)] font-[Poppins]"
                                    to={data?.url}
                                    target={"_blank"}>
                                    {"Click to view"}
                                </Link>
                            </DeatilsItem>

                            <DeatilsItem
                                iconName="code-alt"
                                iconType=""
                                title={"languages : "}
                                value={data?.languages?.join(' , ')}
                            />

                            <DeatilsItem
                                iconName="notepad"
                                iconType="solid"
                                title={"Dependencies : "}
                                value={data?.packeages?.join(' , ')}
                            />
                        </FlexRowWrap>

                        <DeatilsItem
                            iconName="receipt"
                            iconType="solid"
                            title={"Description : "}
                            value={data?.desc}
                        />
                    </WSDetails>
                </WSContainer>
            }

        </>
    )
}

export default WorkSample