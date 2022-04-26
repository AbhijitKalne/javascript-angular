import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Registration from './Component/Registration';
import Login from './Component/Login';
import React from 'react';
import ComponentTest from './ComponentTest';
import Countries from './Components/Countries';
import AddData from './Components/AddData';


function App() {

  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Login/>}> </Route> 
          <Route path="/registration" element={<Registration/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </Router>
       */}
  <Countries/>
  <AddData/>
       {/* <ComponentTest/> */}
    </div>
  );
}

export default App;

// import { useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [data,setData]=useState(['cc','aa','ff','bb'])
//  const  handleSubmit =()=>{
//     setData(data.sort((a,b)=>(a<b)?1:-1))
//   }
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <h1>Data</h1>
//       <button onClick={handleSubmit}>onclick</button>
//       <ul>
//         {
//           data.sort((a,b)=>a>b?1:-1).map((itm,ind)=>(<li>{itm}</li>))
//         }
//         </ul>
//     </div>
//   );
// }
