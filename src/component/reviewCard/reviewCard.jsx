import React from "react";
import './reviewCard.scss'

const ReviewCard=(props)=>{
    return(
       
               <section id="testimonials">
      
        {/* <div class="testimonial-heading">
            <span>Comments</span>
            <h4>Clients Says</h4>
        </div> */}
       
        <div class="testimonial-box-container">
         
            <div class="testimonial-box">
            
                <div class="box-top">
                  
                    <div class="profile">
                     
                        <div class="profile-img">
                            <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
                        </div>
                      
                        <div class="name-user">
                            <strong>{props.name}</strong>
                            {/* <span>@liammendes</span> */}
                        </div>
                    </div>
                    
                    <div class="reviews">
                        <i class="fas fa-star">{props.date}</i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
                
                <div class="client-comment">
                    <p>{props.review}</p>
                </div>
            </div>
        </div>
        </section>
        
    );
}
export default ReviewCard;