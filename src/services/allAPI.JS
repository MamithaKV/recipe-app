import commonAPI from "./commonApi"
import SERVERURL from "./serverURL"

//saveRecipeAPI - post http request called add compont
export const saveRecipeAPI = async (recipeDetails)=>{
  return await commonAPI("POST",`${SERVERURL}/uploadRecipes`,recipeDetails)
}

// getAllRecipieAPI
export const getAllRecipeAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/uploadRecipes`,"")
  }
// remove
export const removeRecipeAPI = async (id)=>{
  return await commonAPI("DELETE",`${SERVERURL}/uploadRecipes/${id}`,{})
}
// update
export const updateRecipeAPI=async(id,recipeDetails)=>{
  return await commonAPI("PUT",`${SERVERURL}/uploadRecipes/${id}`,recipeDetails)

}
//to get one recipie from the api
export const getOneRecipeAPI=async(id)=>{
  return await commonAPI("GET",`${SERVERURL}/uploadRecipes${id}`,{})
}