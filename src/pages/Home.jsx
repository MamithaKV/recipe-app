import React, { useState } from 'react'
import AddRecipe from '../component/AddRecipe'
import ViewRecipe from '../component/ViewRecipe'


const Home = () => {
  const [addResponseFromHome ,setAddResponseFromHome] = useState("")
  return (
     <div style={{paddingTop:'100px'}}>
     <div className='container mb-5 d-flex justify-content-between'> 
     <AddRecipe setAddResponseFromHome={setAddResponseFromHome}/>
      
     </div>
     <div className="container-fluid row my-5">
      <h3 className='h2 ms-2'>All Recipies</h3>
      <hr />
      <ViewRecipe addResponseFromHome={addResponseFromHome}/>
      </div>
     </div>
  )
}
export default Home