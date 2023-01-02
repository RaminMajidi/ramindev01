import React from 'react'

const Social  =(props)=>{
const {data,i} = props;

return(
    <div key={data.id} className={`neumorphism wow position-relative d-flex flex-column mx-2 my-4 col-5 col-md-3 justify-content-center align-items-center  animate__animated animate__wobble animate__delay-${i}s`}>
        <i className={`bx ${data.icon} text-info fs-1 my-2`}></i>
        <a target={"_blank"} href={data.url} className="social-link text-decoration-none p-1 ">{data.text}</a>
        <div key={i} className='toltip'>{data.title}</div>
    </div>
)

}

export default Social;