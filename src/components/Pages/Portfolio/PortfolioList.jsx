import React, { useEffect, useState } from 'react';
import { portfolioData } from '../../../assets/data/data';
import Loading from '../../Design/Loading';


const PortfolioList = (props)=>{
const {filter} = props;
const [data,setData] = useState([]);

useEffect(()=>{
  setData(portfolioData);
},[])

    return(
        <>
        {data.length ? (
          <>
          {data.map((item,i)=>{
              if(item.category==filter || filter=="All"){
                 return(
                       <div className={`wow port-card  col-12 col-md-5 col-lg-5 h-100 my-2 animate__animated animate__zoomIn `}>
                          <div  className='w-100 h-auto'>
                             
                             <img src={item.img} alt="" className='port-img' />
                             <div className='pord-desc'>
                              <h4 className='fs-md-1 text-info mt-md-2 mt-1 mx-auto'>{item.title}</h4>
                              <h5 className='fs-md-1 text-danger my-md-2 my-1 mx-auto'>{item.category}</h5>
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
        ) : (<Loading/>)}
        </>

    )

}

export default PortfolioList;