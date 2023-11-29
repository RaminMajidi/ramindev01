import { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import HOMEDATA from '../data/homeData.json'
import HomeDetails from '../components/home/HomeDetails';
import Loading from '../components/design/Loading/Loading';


const Home = () => {
    const data = useLoaderData()
    return (
        <Suspense fallback={<Loading />}>
            <Await resolve={data.homeData}>
                {(loadHomeData) => (<HomeDetails data={loadHomeData.data} />)}
            </Await>
        </Suspense>
    )
}

//****start loadData*****
async function loadHomeData() {
    const data = await { data: HOMEDATA }
    return data
}
//****end loadData*****

//****start react-router-dom Loader function
export async function homeLoader() {
    return defer({
        homeData: loadHomeData(),
    })
}
//****end react-router-dom Loader function

export default Home