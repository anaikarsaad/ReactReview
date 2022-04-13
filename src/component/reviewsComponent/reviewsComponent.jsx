import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewCard from '../reviewCard/reviewCard';
import Rating from '@material-ui/lab/Rating';
const ReviewsComponent=()=>{
    const[item,setItems]=useState([])
    const[rating,setRating]=useState([])
    let params=useParams();
    
    useEffect(() => {
        axios.get('https://unitybackendshop.herokuapp.com/api/getAll1/'+params.title
          )
          .then(function (response) {
              setItems(response.data)
            // console.log(item);
          })
          axios.get('https://unitybackendshop.herokuapp.com/api/getAll1/'+params.title+'/rating'
          )
          .then(function (response) {
              setRating(response.data[0].average)
            console.log(rating);
          })
      },[])
      
    return(
     
        <div>
        {/* <div style={{display:"flex"}}> */}
          <div class="testimonial-heading">
            <span>Reviews</span>
            <h4 className='title'>{params.title}</h4>
            <Rating className='ratingMaterial' name="read-only" value={rating}  precision={0.5} readOnly />
        </div>
        
        {/* </div> */}
   
{item.map((item)=>{
   return(
      <ReviewCard name={item.name} review={item.review} date={item.date} rating={item.rating}/>
   );
})}
        </div>
    )
}

export default ReviewsComponent;