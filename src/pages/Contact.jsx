import { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import CONTACT_DATA from '../data/contactData.json'
import ContactDetails from '../components/contact/ContactDetails';
import Loading from '../components/design/Loading/Loading';


const Contact = () => {
  const data = useLoaderData()
  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={data.contactData}>
        {(loadContactData) => (<ContactDetails data={loadContactData.data} />)}
      </Await>
    </Suspense>
  )
}



//****start loadData*****
async function loadContactData() {
  const data = await { data: CONTACT_DATA }
  return data
}
//****end loadData*****

//****start react-router-dom Loader function
export async function contactLoader() {
  return defer({
    contactData: loadContactData(),
  })
}
//****end react-router-dom Loader function

export default Contact