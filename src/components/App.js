import React, { useEffect,useState } from 'react';
import './App.css';
import "animate.css";
import "boxicons";
import Loading from './Design/Loading';
import Header from './Pages/Router/Header';
import { ActiveContext } from './Context/ActiveContext';
import Rotate from './Design/Rotate/Rotate';


const  App = ()=> {
  const [activeMenu,setActiveMenu] = React.useState("home");
  const [loading,setLoading]=useState(false);
  console.error = ()=>{};
  console.log = ()=>{};

  useEffect(()=>{
    window.addEventListener("load",setLoading(true));
  },[])

  return (
    <div className='App'>
    {
      loading ? ( 
      <>
      <ActiveContext.Provider value={{activeMenu,setActiveMenu}}>
         <Rotate/>
        <Header/>
      </ActiveContext.Provider>
      </>
      ) :
       (<Loading/>)
    }
  </div>
  );
}
export default App;
