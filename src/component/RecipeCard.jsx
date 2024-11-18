import { useState } from 'react'
import React from 'react'
import { Card, Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { removeRecipeAPI } from '../services/allAPI.JS';
import { updateRecipeAPI } from '../services/allAPI.JS';
import { getAllRecipeAPI } from '../services/allAPI.JS';

const RecipeCard = ({ displayData, setDeleteRecipeResponse, setUpdateRecipeResponse }) => {

  // Initialize editRecipe as an object (not an array)
  const [editRecipe, setEditRecipe] = useState({
    title: '',
    ingredients: '',
    imageUrl: '',
    category: ''
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeRecipe = async (id) => {
    try {
      const result = await removeRecipeAPI(id);
      setDeleteRecipeResponse(result);
    } catch (err) {
      console.log(err);
    }
  };

  const getRecipe = async (id) => {
    const result = await getAllRecipeAPI();
    const foundRecipe = result.data.find(item => item.id === id);
    // Set the editRecipe state with the found recipe data
    setEditRecipe(foundRecipe);
    handleShow();
  };

  const saveChanges = async (id) => {
    try{
      await updateRecipeAPI(id,editRecipe)
      setUpdateRecipeResponse(editRecipe); // Assuming you want to update some parent state
      handleClose();
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <Card style={{ height: '400px' }}>
        <Card.Img variant="top" height={'170px'} src={displayData?.imageUrl} />
        <Card.Body>
          <Card.Text>
            <h5 style={{ color: 'red' }}>{displayData?.title}</h5>
            <p className='fw-bolder'>Ing : {displayData?.ingredients}</p>
            <p className='fw-bolder'>Category : {displayData?.category}</p>
            <div className=' mt-5 d-flex justify-content-between'>
              <button onClick={() => removeRecipe(displayData?.id)} className='btn'>
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
              <button onClick={() => getRecipe(displayData?.id)} className='btn'>
                <i className="fa-regular fa-pen-to-square text-info"></i>
              </button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Modal for editing recipe */}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
            {/* Bind form controls to editRecipe state */}
            <FloatingLabel className='' controlId="floatingTitle" label="Title">
              <Form.Control
                type="text"
                placeholder="Title"
                value={editRecipe.title}
                onChange={(e) => setEditRecipe({ ...editRecipe, title: e.target.value })}
              />
            </FloatingLabel>
            <FloatingLabel className='mt-2' controlId="floatingIngredients" label="Ingredients">
              <Form.Control
                type="text"
                placeholder="Ingredients"
                value={editRecipe.ingredients}
                onChange={(e) => setEditRecipe({ ...editRecipe, ingredients: e.target.value })}
              />
            </FloatingLabel>
            <FloatingLabel className='mt-2' controlId="floatingImageUrl" label="Image Url">
              <Form.Control
                type="text"
                placeholder="Image URL"
                value={editRecipe.imageUrl}
                onChange={(e) => setEditRecipe({ ...editRecipe, imageUrl: e.target.value })}
              />
            </FloatingLabel>
            <FloatingLabel className='mt-2' controlId="floatingCategory" label="Category">
              <Form.Control
                type="text"
                placeholder="Category"
                value={editRecipe.category}
                onChange={(e) => setEditRecipe({ ...editRecipe, category: e.target.value })}
              />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="success" onClick={() => {saveChanges(editRecipe.id)}} >Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RecipeCard;
