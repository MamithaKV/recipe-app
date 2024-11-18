import React from 'react'
import { Link } from 'react-router-dom'



const Landing = () => {
  return (
    <>  
   <div
   style={{
    paddingTop: '100px',
    backgroundImage: 'url("https://thumbs.dreamstime.com/b/different-spices-herbs-stone-table-top-view-ingredients-cooking-food-background-different-spices-herbs-black-120232209.jpg")', // Image URL
    backgroundSize: 'cover', // Ensure the image covers the entire div
    backgroundPosition: 'center', // Position the image in the center
    backgroundRepeat: 'no-repeat', // Don't repeat the image
    minHeight: '700px', // Ensure the div has a height so the image shows
    
    }} 
> 
  
    <h3 className='h1' style={{paddingLeft:'100px',color:'black',fontFamily:'ne'}}>THE EASIEST WAY</h3>
    <h3 style={{paddingLeft:'140px',fontWeight: '100px',fontFamily:'ne',color:'white'}}>TO MAKE YOUR</h3>
    <h3 className='h1' style={{paddingLeft:'100px',color:'black',fontFamily:'ne'}}>FAVOURITE RECIPE</h3>
    <p className=' mt-4 ms-3'  style={{paddingLeft:'80px',width:'500px',fontFamily:'sans-serif',color:'white'}}>Discover 1000+ recipes in your hand with the best recipe. Help you to find the easiest way to cook</p><br />
    <div style={{paddingLeft:'100px'}}>
     <Link to={'/Home'}><button style={{color:'white',paddingLeft:'10px'}} className=' ms-5 rounded p-3 bg-black'>viewMore</button></Link>
  
    </div>
    </div>
    </>
  )
}

export default Landing