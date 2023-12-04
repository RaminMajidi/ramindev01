import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Loading from '../components/design/Loading/Loading'
import WSContainer from "../components/workSample/WSContainer"
import WSBaner from "../components/workSample/WSBaner"
import WSDetails from "../components/workSample/WSDetails"
import DeatilsItem from "../components/workSample/DeatilsItem"
import FlexRowWrap from "../components/portfolio/FlexRowWrap"
import { useTranslation } from "react-i18next"
import { FONT_POPPINS } from "../data/data"
import { useAppContext } from "../context/app/AppContext"
import BtnBack from "../components/Btns/BtnBack/BtnBack"


const WorkSample = () => {
    const { t } = useTranslation()
    const { language } = useAppContext()
    const { state } = useLocation()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

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
                                valueFont={FONT_POPPINS}
                                iconName="sketch"
                                iconType="logo"
                                title={t("workSampel.title")}
                                value={data?.title}
                            />
                            <DeatilsItem
                                valueFont={FONT_POPPINS}
                                iconName="category"
                                iconType="solid"
                                title={t("workSampel.category")}
                                value={data?.category}
                            />
                            <DeatilsItem
                                valueFont={FONT_POPPINS}
                                iconName="calendar"
                                iconType="solid"
                                title={t("workSampel.year")}
                                value={data?.yearOf}
                            />
                            <DeatilsItem
                                iconName="link"
                                iconType=""
                                title={t("workSampel.link")}

                            >
                                <Link
                                    className="text-blue-500"
                                    to={data?.url}
                                    target={"_blank"}>
                                    {t("workSampel.link_text")}
                                </Link>
                            </DeatilsItem>

                            <DeatilsItem
                                valueFont={FONT_POPPINS}
                                iconName="code-alt"
                                iconType=""
                                title={t("workSampel.languages")}
                                value={data?.languages?.join(' , ')}
                            />

                            <DeatilsItem
                                valueFont={FONT_POPPINS}
                                iconName="notepad"
                                iconType="solid"
                                title={t("workSampel.dependencies")}
                                value={data?.packeages?.join(' , ')}
                            />
                            {(data.fa_desc && data.en_desc) &&
                                <DeatilsItem
                                    iconName="receipt"
                                    iconType="solid"
                                    title={t("workSampel.description")}
                                    value={data[language + "_desc"]}

                                />

                            }
                        </FlexRowWrap>
                        <BtnBack />
                    </WSDetails>
                </WSContainer>
            }
        </>
    )
}

export default WorkSample