import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
        <Navbar style={{zIndex:1,backgroundColor: '#6c757d'}} className="">
        <Container  className='d-flex justify-content-center m-0 '>
        <Link to={'/'} style={{textDecoration:'none'}}>
        <Navbar.Brand className='text-center ' >
        <img alt=""src="https://cdn-icons-png.flaticon.com/512/450/450166.png" width="30" height="30" className="d-inline-block align-top"/>{' '}
            Food Recipe
        </Navbar.Brand>
        </Link>
        </Container>
        </Navbar>
  )
}

export default Header