import React, {useState} from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "@/page/Home";
import Main from "@/page/Main";
import '@/styles/reset.css';
import Navigator from "@/components/Navigator";

function App() {
  const [currentPage , setCurrentPage ] = useState<string>("home");
  {/* following : following
    * home : home
    * search : search
  */}

  return (
    <div className="App">
      <Navigator currentPage={currentPage} setCurrentPage={setCurrentPage}/>

      <Routes>
          <Route path={"/"} element={<Main/>}>Main</Route>
          <Route path="/home" element={<Home />}>Home</Route>
        </Routes>
    </div>
  );
}

export default App;
