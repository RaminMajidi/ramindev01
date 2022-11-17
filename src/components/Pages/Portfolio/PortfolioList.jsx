import React, { useEffect, useState } from 'react';
import { portfolioData } from '../../../assets/data/data';


const PortfolioList = (props)=>{
const {filter} = props;
const [data,setData] = useState();


useEffect(()=>{
    setData(portfolioData);
},[])

    return(
        <>
        {data ? (
          <>
          {data.map((item,i)=>{
              console.log(item)
              if(item.category==filter || filter=="All"){
                 return(
                       <div className={`wow port-card col-12 col-md-5 col-lg-5 my-2 animate__animated animate__zoomIn `}>
                          <div className='position-relative'>
                              <img src={item.img} alt="" className=' port-img' />

                              <div className='pord-desc'>
                              <h5 className='fs-md-1 text-info mt-md-2 mt-1 mx-auto'>{item.title}</h5>
                              <h6 className='fs-md-1 text-danger my-md-2 my-1 mx-auto'>{item.category}</h6>
                              <div className='d-flex flex-wrap justify-content-center'>
                              {
                                  item.co_url ? (<a target={"_blank"} href={item.co_url}><button title='سرور خارجی' className='btn m-1 w-auto '>تماشای آنلاین</button></a>) : (null)
                              }
                              {
                                  item.ir_url ? (<a target={"_blank"} href={item.ir_url}><button title='سرور داخلی' className='btn m-1 w-auto'>تماشای آنلاین</button></a>) : (null)
                              }
                              </div>
                          </div>
                          </div>
                       
                       </div>
                        )
              } 
          })}
          </>
        ) : (<p className='text-danger'> Loading...</p>)}
        </>

    )

}

export default PortfolioList;