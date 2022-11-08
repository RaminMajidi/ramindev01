import React, { useContext, useEffect } from "react";
import { ActiveContext } from "../../Context/ActiveContext";


const Home = () =>{
const {setActiveMenu} = useContext(ActiveContext);

useEffect(()=>{
    setActiveMenu("home");
},[])

    return(
        <section className="page col-12 col-lg-10 col-md-9  " >
            <h2>Home</h2>
        </section>
    )
}

export default Home;