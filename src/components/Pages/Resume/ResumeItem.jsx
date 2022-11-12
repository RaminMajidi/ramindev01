import React, { useEffect, useState } from 'react';


const ResumeItem =(props)=>{
    
const [data,setData] = useState();

useEffect(()=>{
    setData(props.data);
},[])
    return(
        <>
        {
            data ? (
                <>
                {data.map((item,i)=>{
                    return(
               
                     <div className={`col-12 wow col-lg-3 mx-2 my-3  animate__animated animate__zoomInDown animate__delay-${i}s`}>
                         <h3 className="b-t-n text-white mx-auto mb-4 px-2">{item.title1}</h3>
                         <ul className=" text-white my-2">
                         <span className="line"></span>
                             <li className="text-info d-flex align-items-center"><i class='bx bxs-chevron-left-circle mx-1'></i><span className='mx-1'>{item.startDate}</span></li>
                             <div className="">
                                 <h4 className="p-1 my-2">{item.title2}</h4>
                                 <p className="text-just p-2 fs-5">{item.desc}</p>
                             </div>
                             <li className="text-info d-flex align-items-center"><i class='bx bxs-chevron-left-circle mx-1'></i><span className='mx-1'>{item.endDate}</span></li>
                         </ul>
                     </div>
                    )
                })}
                </>
               
            ) : (null)
        }
        </>

    )
}
export default ResumeItem;