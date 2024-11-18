import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import RecipeCard from '../component/RecipeCard'
import { getAllRecipeAPI } from '../services/allAPI.JS'


const ViewRecipe = ({addResponseFromHome}) => {
const[deleteRecipeResponse,setDeleteRecipeResponse] = useState("")
const[updateRecipeResponse, setUpdateRecipeResponse]= useState("")


  const[allRecipe,setAllRecipe] = useState([])
  useEffect (()=>{
    getAllRecipe()
  },[addResponseFromHome,deleteRecipeResponse,updateRecipeResponse])
  console.log(allRecipe);
  
const getAllRecipe = async()=>{
  try{
   const result = await getAllRecipeAPI()
   console.log(result);
   
  if(result.status>=200 && result.status<300){
  setAllRecipe(result.data);
    
  }
  }catch(err){
  console.log(err);
  
  }
}

  return (
    <>
     <Row className='ms-3'>
   {
    allRecipe?.length>0?
    allRecipe?.map(recipe=>(
      <Col key={recipe?.id} className='mb-3' sm={6} md={3} lg={2} >
      <RecipeCard setDeleteRecipeResponse={setDeleteRecipeResponse} setUpdateRecipeResponse={setUpdateRecipeResponse} displayData={recipe}/>
      </Col>
    ))
   
    :
    <div className="fw-bolder text-success fs-4">no recipies are uploaded yet!!!!</div>
   }
    </Row>
    </>
  )
}

export default ViewRecipe