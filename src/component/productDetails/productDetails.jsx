import React, { useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Card from "../card/card";
import { useNavigate } from "react-router-dom";
const ProductDetails=()=>{
    let navigate = useNavigate();
    let params = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items,setItems] = useState([]);
    // console.log(params.title);
   
    useEffect(() => {
        axios.get(' https://unitybackendshop.herokuapp.com/api/getAll/'+params.title
          )
          .then(function (response) {
              setItems(response.data)
            // console.log(response);
          })
      }, [])
    return(
        
        <div >
        {console.log(items)}
        
            {items.map((item)=>{
                return(
                    <div >
                 <Card title={item.prodname} img={item.img} expiry={item.expiry} manufacture={item.manufacture} price={item.price} category={item.category} id={item._id}/>
                 </div>
                );
            })}
            <h1>
                
            </h1>
        </div>

    )
}
export default ProductDetails;