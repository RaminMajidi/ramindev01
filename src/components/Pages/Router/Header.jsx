import React, { useContext, useState } from "react";
import "./Header.css";
import myImg from "../../../assets/images/me.png";
import { BrowserRouter,Routes,Link, Route } from "react-router-dom";
import { ActiveContext } from "../../Context/ActiveContext";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import Error404 from "../Errors/Error404";


const Header = () =>{
  const [show,setShow] = useState("");
  const [icon,setIcon] = useState("bx-menu")

const showMenu = ()=>{
show ? setShow("") : setShow("show");
icon === "bx-menu" ? setIcon("bx-x") : setIcon("bx-menu");
}


  const {activeMenu} = useContext(ActiveContext);
    return(
        <BrowserRouter>
<header className={`header col-6 col-lg-2 col-md-3 position-fixed ${show}`}>
<div>
        <i onClick={showMenu} className={`bx ${icon} text-white hamber`}></i>
        </div>
 <div className="w-100 position-relative">
    <img className="w-100 h-25" src={myImg} alt="myImage" />
    <h2 className="my-name text-white fs-4 p-1">رامین مجیدی</h2>
 </div>
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100 w-100">
    <hr/>
    <ul className="nav nav-pills d-flex flex-column justify-content-around align-items-start mb-auto text-end">
      <li className="nav-item w-100">
        <Link to={"/"} className={`text-white nav-link ${activeMenu === "home" ? "active" : ""}`} aria-current="page">
        <i className='bx bxs-home m-2'></i>
          خانه
        </Link>
      </li>
      <li className="nav-item w-100 ">
        <Link to={"/About"} className={`text-white nav-link ${activeMenu === "about" ? "active" : ""}`}>
        <i className='bx bxs-user m-2'></i>
          درباره من
        </Link>
      </li>
      <li className="nav-item w-100 ">
        <Link to={"/Resume"} className={`text-white nav-link ${activeMenu === "resume" ? "active" : ""}`}>
        <i className='bx bxs-graduation m-2'></i>
          تجربیات
        </Link>
      </li>
      <li className="nav-item w-100 ">
        <Link to={"/Portfolio"} className={`text-white nav-link ${activeMenu === "portfolio" ? "active" : ""}`}>
        <i className='bx bx-code-block m-2'></i>
          نمونه کارها
        </Link>
      </li>
      <li className="nav-item w-100 ">
        <Link to={"Contact"} className={`text-white nav-link ${activeMenu === "contact" ? "active" : ""}`}>
        <i className='bx bxs-envelope m-2'></i>
          ارتباط با من
        </Link>
      </li>
    </ul>

  </div>
</header>

<Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Resume' element={<Resume/>}/>
      {/* <Route path='/User/:userToken' element={<User/>}/> */}
      <Route path="/Portfolio" element={<Portfolio/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>

</BrowserRouter>
    )
}

export default Header;