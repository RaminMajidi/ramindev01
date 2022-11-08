import React from 'react';
import './App.css';
import "animate.css";
import Header from './Pages/Router/Header';
import { ActiveContext } from './Context/ActiveContext';

const  App = ()=> {
  const [activeMenu,setActiveMenu] = React.useState("home");

  return (
  <div className='App'>
  <ActiveContext.Provider value={{activeMenu,setActiveMenu}}>
    <Header/>
  </ActiveContext.Provider>
  </div>
  );
}
export default App;
