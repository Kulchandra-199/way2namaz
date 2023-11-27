import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../Pages/Homepages/Home';
import About from '../Pages/Aboutpages/About';
import Service from '../Pages/Service/Service';

const Router = () => {
    return (
        <Routes>
        <Route path= '/' element={<Navigate to ='/home'/>}/>  
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>



       
    </Routes>
    );
}

export default Router;
