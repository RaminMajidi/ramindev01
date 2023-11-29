import { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import Loading from '../components/design/Loading/Loading';
import ABOUTDATA from '../data/aboutData.json'
import AboutDetails from '../components/about/AboutDetails';


const About = () => {
  const data = useLoaderData()
  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={data.aboutData}>
        {(loadAboutData) => (<AboutDetails data={loadAboutData.data} />)}
      </Await>
    </Suspense>
  )
}

//****start loadData*****
async function loadAboutData() {
  const data = await { data: ABOUTDATA }
  return data
}
//****end loadData*****

//****start react-router-dom Loader function
export async function aboutLoader() {
  return defer({
    aboutData: loadAboutData(),
  })
}
//****end react-router-dom Loader function

export default About