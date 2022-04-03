import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewCard from '../reviewCard/reviewCard'
const ReviewsComponent=()=>{
    const[item,setItems]=useState([])
    let params=useParams();
    useEffect(() => {
        axios.get(' https://unitybackendshop.herokuapp.com/api/getAll1/'+params.title
          )
          .then(function (response) {
              setItems(response.data)
            console.log(item);
          })
      },[params.title])
    return(
        <div>
          <div class="testimonial-heading">
            <span>Reviews</span>
            <h4 className='title'>{params.title}</h4>
        </div>
{item.map((item)=>{
   return(
      <ReviewCard name={item.name} review={item.review} date={item.date}/>
   );
})}
        </div>
    )
}

export default ReviewsComponent;