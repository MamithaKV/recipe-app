import React from 'react'

const Footer = () => {
  return (
        <div style={{height:'200px', }} className=' w-100  '>
        <div style={{backgroundColor:'black',}} className="d-flex justify-content-between ">
            {/* intro */}
        <div className='ms-3 mt-4' style={{width:'300px'}}>
        <h3 style={{color:'white'}} className='me-1'><img alt=""src="https://cdn-icons-png.flaticon.com/512/450/450166.png"width="30"height="30"className="d-inline-block align-top "/>FOOD RECIPE</h3> 
        <p style={{color:'white'}}>We're all about recipes and about quality home cooking that everyone can enjoy . Whether you're looking for some healthy inspiration or learning how to cook a delicous food . we've trustworthy guidance for all your foodie needs..</p>
        </div>
            {/* textbox */}
        <div className='d-flex flex-column align-items-center gap-3 me-5 mt-4'>
        <h3 style={{color:'white'}}>Join Our Mailing List</h3>
        <div className='d-flex'>
        <input className='shadow form-control me-2' type="text" placeholder='enter email id'/>
              
        <button style={{color:'black'}} className='rounded p-1'>Sign Up</button>
        </div>
        </div>
            {/* follow us */}
            
        <div className='d-flex flex-column align-items-center gap-3 me-5 mt-4'>
        <h4 style={{color:'white'}}>Follow Us</h4>
        <div className='d-flex gap-3'>
        <i style={{color:'white'}} class="fa-solid fa-envelope icon-hover"></i>
        <i style={{color:'white'}} class="fa-brands fa-instagram icon-hover"></i>
        <i style={{color:'white'}} class="fa-brands fa-twitter icon-hover"></i>
        </div>
        <p style={{color:'white'}}  className=" text-center mt-3 ms-5 ">Copyright &copy; 2024 Food Recipe. All Rights Reserved.</p>
        </div>
        </div>
        </div>
  )
}

export default Footer