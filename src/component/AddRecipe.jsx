import React,{useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { saveRecipeAPI } from '../services/allAPI.JS';


const AddRecipe = ({setAddResponseFromHome}) => {
  const [recipeDetails,setRecipeDetails] = useState({
    title :"",ingredients:"",imageUrl:"",category:""
  })
  console.log(recipeDetails);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddRecipe = async ()=>{
    const {title,imageUrl,ingredients,category} = recipeDetails
    if(title && imageUrl && ingredients && category){
     try{
      const result = await saveRecipeAPI(recipeDetails)
      console.log(result);
      if(result.status>=200 && result.status<300){
        alert("upload successfully...")
        handleClose()
        setAddResponseFromHome(result)
      }else{
        console.log(result);
        
      }
     }catch(err){
      console.log(err);
      
     }
    }else{
      alert("please fill form")
    }
  }

  return (
    <>
         <div className="d-flex align-items-center">
         <h4>Add New Recipe</h4>
         <button onClick={handleShow} style={{color:'white'}} className='rounded ms-2 btn btn-primary fw-bolder'>ADD</button>
          </div>

        <Modal show={show} onHide={handleClose}backdrop="static"
          keyboard={false}>
        <Modal.Header closeButton>
        <Modal.Title>Recipe Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
          
       
      
        <FloatingLabel className='' controlId="floatingTitle" label="Title">
        <Form.Control onChange={e=>setRecipeDetails({...recipeDetails,title:e.target.value})} type="text" placeholder="title" />
        </FloatingLabel>
        <FloatingLabel  onChange={e=>setRecipeDetails({...recipeDetails,ingredients:e.target.value})} className='mt-2' controlId="floatingIngredients" label="Ingredients">
        <Form.Control type="text" placeholder="ingredients(main)" />
        </FloatingLabel>
        <FloatingLabel  onChange={e=>setRecipeDetails({...recipeDetails,imageUrl:e.target.value})} className='mt-2' controlId="floatingImageUrl" label="Image Url">
        <Form.Control type="text" placeholder="imageUrl" />
        </FloatingLabel>
        <FloatingLabel  onChange={e=>setRecipeDetails({...recipeDetails,category:e.target.value})} className='mt-2' controlId="floatingCategory" label="category">
      <Form.Control type="text" placeholder="category" />
      </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Cancel
        </Button>
        <Button  variant="success" onClick={handleAddRecipe}>
            Add
        </Button>
        </Modal.Footer>
        </Modal>
    </>
  )
}

export default AddRecipe