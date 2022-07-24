import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Search from './Search';

function App() {
    return (
        <div className='App'>
            {/* <Navigator currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
            <Routes>
                <Route path={'/'} element={<div id='main' />}>
                    Main
                </Route>
                <Route path={'/home'} element={<div />}>
                    Home
                </Route>
                <Route path={'/search'} element={<Search />}></Route>
                <Route path={'/following'} element={<div />}>
                    Following
                </Route>
            </Routes>
            {/* <BottomNavigator /> */}
        </div>
    );
}

export default App;
