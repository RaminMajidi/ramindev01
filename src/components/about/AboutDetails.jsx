import React from 'react'
import AboutContainer from './AboutContainer';
import PageTitle from '../design/PageTitle';
import { useTranslation } from "react-i18next";
import SectionTop from './sectionTop/SectionTop';
import SectionBottom from './sectionBottom/SectionBottom';

const AboutDetails = ({ data }) => {
    const { t } = useTranslation();
    console.log(data);
    return (
        <AboutContainer>
            <PageTitle
                topicTitle={t("about.pageTitle.topicTitle") + " "}
                topicTitle2={t("about.pageTitle.topicTitle2")}
                belowTitle={t("about.pageTitle.belowTitle")}
            />
            <SectionTop
                personalData={data.personalInfos}
                sideData={data.sideItems}
            />
            <SectionBottom
                basicSkillsData={data.basicSkills}
                subSkillsData={data.subSkills}
                experienceData={data.experience}
            />
        </AboutContainer>
    )
}

export default AboutDetails