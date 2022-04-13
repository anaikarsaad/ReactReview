import React,{useEffect,useState} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './updateComponent.scss';
import Rating from '@material-ui/lab/Rating';
const UpdateComponent=()=>{
    let navigate = useNavigate();
    const { state } = useLocation();
    const[items,setItems]=useState();
    const[click,setClick]=useState(false);
    const [ratingValue, setRatingValue] = useState(0);
//   const[expiry,setExpiry]=useState(state.expiry);
//   const[price,setPrice]=useState(state.price);
//   const[manufacture,setManufacture]=useState(state.manufacture);
const[name,setName]=useState("");
const[review,setReview]=useState("");
    // useEffect(() => {
    //     axios.patch('https://localhost:5000/api/update/623313c4ff9f420bc279ba0b',{
    //         manufacture:"16th february 2022"
    //     }
    //       )
    //     //   .then(function (response) {
    //     //       setItems(response.data)
    //     //     console.log(response);
    //     //   })
    //   }, [click])
    
    
    // console.log(state);

    
    const handleClick= async ()=>{
        const { data } = await axios.post('https://unitybackendshop.herokuapp.com/api/post/'+state.title,{
           name:name,
           review:review,
           rating:ratingValue
        });
        console.log(state.title);
        navigate(`/home/${state.title}/review`)
        
    }
    
    const postReview=(e)=>{
        e.preventDefault();
        handleClick();
    }
    return(
        <div className='firstDiv'>
        <div class="supaviews">
	
        <div class="supaviews__gradient"></div>
        <div class="supaviews__add">
            <div class="supaview">
                <h1 class="supaview__title">{state.title.toUpperCase()}</h1>
                <Rating className='rating'
            name="Rating Label"
            value={ratingValue}
            onChange={(event, newValue) => {
              setRatingValue(newValue);

            }}
          />
                <form id="review" action="" autocomplete="off" onSubmit={postReview}>
                    
                    <div class="supaview__copy">
                        <input type="text" name="name1" placeholder="Name" autocomplete="false" onChange={e => setName(e.target.value)}/>
                        <textarea name="message" placeholder="Message" rows="5" onChange={e => setReview(e.target.value)}></textarea>
                    </div>
                    <button class="supaview__submit" type='submit'>Submit review</button>
                </form>
            </div>
        </div>
        
    </div>
    </div>
    
    
        
        
       
  
      
           
        
    )
}

export default UpdateComponent;

{/* <div>
<h1>{state.title}</h1>
<div>
<label>Name</label>
<input type="text" placeholder="Enter your name" onChange={e => setName(e.target.value)} />
</div>
<div>
<label>Review</label>
<input type="text" placeholder="Enter your experience" onChange={e => setReview(e.target.value)} />
</div>

<button class="btn btn-primary" onClick={handleClick}>Add Review</button>

        </div> */}