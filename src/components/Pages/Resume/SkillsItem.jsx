import React, { useEffect, useState } from 'react';

const SkillsItem = (props)=>{
const [data,setData] = useState();

useEffect(()=>{
    setData(props.data);
},[])

    return(
   <>
   {data ? (
      <>
      {     
data.map((item,i)=>{
              return(
<div key={item.id} className={` col-5 col-md-4 col-lg-3 m-2 wow animate__animated animate__bounceInRight animate__delay-1s`}>
   <span className='text-info'>{item.name}</span>
   <div class="progress bg-dark">
     <div class="wow progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{width:`${item.percent}%`}} aria-valuenow={item.percent} aria-valuemin="0" aria-valuemax="100"></div>
   </div>
</div>
              )
          })
      }
      </>
   ) : (null)}
   </>
    )
}
export default SkillsItem;