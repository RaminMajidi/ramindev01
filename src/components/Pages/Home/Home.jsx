import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { ActiveContext } from "../../Context/ActiveContext";
import { skils } from "../../../assets/data/data";


const Home = () =>{
const {setActiveMenu} = useContext(ActiveContext);
const [skil,setSkil] = useState(skils[0]);

useEffect(()=>{
    setActiveMenu("home");
    setInterval(()=>{
        let i = Math.floor(Math.random() * skils.length);
        setSkil(skils[i]);
    },5000)
},[])

    return(
        <section className="page col-12 col-lg-10 col-md-9 home  animate__animated animate__backInDown" >
            <h1 className="full-name p- mb-4"><span className="text-white">رامین </span><span className="text-info">مجیدی</span></h1><br />
            <h2 className="d-flex align-items-center text-white mt-1 "><span>من یک </span> <span className="my-skils fw-bold ">{skil}</span><span className="type-icon">|</span></h2>
        </section>
    )
}

export default Home;