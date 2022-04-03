import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import HomePage from './pages/home';
import ProductDetails from './component/productDetails/productDetails';
import UpdateComponent from './component/update/updateComponent';
import ReviewsComponent from './component/reviewsComponent/reviewsComponent';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<HomePage />}/>
      <Route path="/home/:title" element={<ProductDetails/>} />
      <Route path="/home/:title/update" element={<UpdateComponent/>}/>
      <Route path="/home/:title/review" element={<ReviewsComponent/>}/>
      
   

       
        
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;