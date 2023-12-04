import React, { useState } from 'react'
import PortfolioContainer from './PortfolioContainer'
import PageTitle from '../design/PageTitle'
import { useTranslation } from 'react-i18next';
import Filters from './Filters';
import { useAppContext } from "../../context/app/AppContext"
import PortfolioList from './PortfolioList';
const PortfolioDetails = ({ data }) => {
  const { t } = useTranslation();
  const { language } = useAppContext()
  const [list, setList] = useState(data.portfolio);
  const [filter, setFilter] = useState("All")
  const [filterData, setFilterData] = useState(list);

  const filterHandeler = (filterCategory) => {
    setFilter(filterCategory)
    filterCategory == "All" ? (setFilterData(list)) :
      (setFilterData(list.filter(item => item.category === filterCategory)))
  }

  return (
    <>
      <PageTitle
        belowTitle={t("portfolios.pageTitle.belowTitle")}
        topicTitle={t("portfolios.pageTitle.topicTitle") + " "}
        topicTitle2={t("portfolios.pageTitle.topicTitle2")}
      />
      <PortfolioContainer>
        <Filters
          language={language}
          filter={filter}
          categorys={data.categorys}
          filterHandeler={filterHandeler}
        />
        <PortfolioList
          data={filterData}
        />
      </PortfolioContainer>
    </>
  )
}

export default PortfolioDetails