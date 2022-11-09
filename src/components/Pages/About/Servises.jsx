import React from 'react';
import { servises } from '../../../assets/data/data';


const Servises = ()=>{
console.log(servises);

    return(
        <div className='row my-2 p-1'>
            <h2 className='b-t-n w-25 mx-auto text-info'>خدمات</h2>
        <div className="text-white d-flex flex-wrap justify-content-around  p-2 mx-auto mt-4 text-end">
        {
            servises.map(cart=>{
                return(
                <div key={cart.id} className='col-6 col-md-4 col-lg-3 m-2 text-center'>
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