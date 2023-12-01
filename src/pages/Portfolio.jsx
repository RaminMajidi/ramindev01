import { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import Loading from '../components/design/Loading/Loading'
import PortfolioDetails from '../components/portfolio/PortfolioDetails'
import PORTFOLIO_DATA from "../data/portfolioData.json"

const Portfolio = () => {
  const data = useLoaderData()
  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={data.portfolioData}>
        {(loadPortfoliotData) => (<PortfolioDetails data={loadPortfoliotData.data} />)}
      </Await>
    </Suspense>
  )
}

//****start loadData*****
async function loadPortfoliotData() {
  const data = await { data: PORTFOLIO_DATA }
  return data
}
//****end loadData*****

//****start react-router-dom Loader function
export async function portfolioLoader() {
  return defer({
    portfolioData: loadPortfoliotData(),
  })
}
//****end react-router-dom Loader function

export default Portfolio