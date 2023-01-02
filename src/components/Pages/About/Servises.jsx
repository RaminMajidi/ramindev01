import React from 'react';
import { servises } from '../../../assets/data/data';


const Servises = ()=>{

    return(
        <div className=' row my-4 p-1'>
            <h2 className='wow b-t-n mx-auto text-info animate__animated animate__backInRight animate__delay-2s'>خدمات</h2>
        <div className="text-white d-flex flex-wrap justify-content-around  p-2 mx-auto mt-4 text-end">
        {
            servises.map(cart=>{
                return(
                <div key={cart.id} className='neumorphism wow col-6 col-md-4 col-lg-3 mx-2 my-4 p-2 text-center animate__animated animate__fadeInUp animate__delay-0s'>
                    <div className=''><i className={`bx ${cart.icon} fs-1 fw-bold`}></i></div>
                    <h4 className='my-2 text-info fw-bold'>{cart.title}</h4>
                    <p className='fs-5'>{cart.text}</p>
                </div>
                )
            })
        }
        </div>
        </div>
    )
}
export default Servises;