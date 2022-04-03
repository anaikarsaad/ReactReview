import React from "react";
import './card.scss';
import { useNavigate } from "react-router-dom";
const Card=(props)=>{
    let navigate = useNavigate();
    return(
      <div>
         
      <div class="container">

<div class="product">
 <div class="img-container">
   <img src={props.img}/>
 </div>
 <div class="product-info">
   <div class="product-content">
     <h1>{props.title}</h1>
     <p>Expiry: {props.expiry}</p>
     <p>Manufacture: {props.manufacture}</p>
     <p>₹{props.price}</p>
     <div className="buttonDiv">
     <button class="submit" onClick={()=>navigate(`/home/${props.category}/update` , {state:{category:props.category,title:props.title,price:props.price,expiry:props.expiry,id:props.id,manufacture:props.manufacture}})}>Add Review</button>
     <button class="submit" onClick={()=>navigate(`/home/${props.title}/review` , {state:{category:props.category,title:props.title,price:props.price,expiry:props.expiry,id:props.id,manufacture:props.manufacture}})}>View Review</button>
     </div>
   </div>
 </div>
</div>
</div>



     </div>
    );
}
export default Card;