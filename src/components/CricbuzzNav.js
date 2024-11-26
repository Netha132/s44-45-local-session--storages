import React from 'react'
import { NavLink } from 'react-router-dom'
import cricLogo from '../images/cricbuzzLogo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';


function CricbuzzNav() {
  return (
    
    <div className='cricNavBar'>
      <div>
       <img className='cricbuzzLogo' src={cricLogo} alt=''></img>
       </div>
      <nav className='cricNav'>
        <NavLink className="cricbuzzNav" to='/livescore'>Live Scores</NavLink>
        <NavLink className="cricbuzzNav" to='/schedule'>Schedule</NavLink>
        <NavLink className="cricbuzzNav" to='/archive' >Archives</NavLink>
        <NavLink className="cricbuzzNav" to='/news'> <NavDropdown title="News" id="basic-nav-dropdown">
              <NavLink to='/allstories' className='dropDownNavLinks' >All Stories</NavLink>
              
              <NavLink to='/premiumeditorial' className='dropDownNavLinks' >Premium Editorial</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Latest news</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Topics</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Spotlight</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Opinions</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Specials</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Stats & Analysis</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Interviews</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Live Blogs</NavLink>
             
            </NavDropdown></NavLink>

            <NavLink className="cricbuzzNav" to='/series'> <NavDropdown title="Series" id="basic-nav-dropdown">
            <NavLink to='/' className='dropDownNavLinks' >All Stories</NavLink>
              <NavLink to='' className='dropDownNavLinks'>
              Premium editorials
              </NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Latest news</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Topics</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Spotlight</NavLink>
            
            </NavDropdown></NavLink>


            <NavLink className="cricbuzzNav" to='/teams'> <NavDropdown title="Teams" id="basic-nav-dropdown">
              <NavLink to='/' className='dropDownNavLinks' >All Stories</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>
              Premium editorials
              </NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Latest news</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Topics</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Spotlight</NavLink>
              
            </NavDropdown></NavLink>

            <NavLink className="cricbuzzNav" to='/videos'> <NavDropdown title="Videos" id="basic-nav-dropdown">
              <NavLink to='/' className='dropDownNavLinks' >All Stories</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>
              Premium editorials
              </NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Latest news</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Topics</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Spotlight</NavLink>
              
            </NavDropdown></NavLink>

            <NavLink className="cricbuzzNav" to='/rankings'> <NavDropdown title="Rankings" id="basic-nav-dropdown">
              <NavLink to='/' className='dropDownNavLinks' >All Stories</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>
              Premium editorials
              </NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Latest news</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Topics</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Spotlight</NavLink>
              
            </NavDropdown></NavLink>

            <NavLink className="cricbuzzNav" to='/rankings'> <NavDropdown title="More" id="basic-nav-dropdown">
              <NavLink to='/' className='dropDownNavLinks' >All Stories</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>
              Premium editorials
              </NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Latest news</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Topics</NavLink>
              <NavLink to='/' className='dropDownNavLinks'>Spotlight</NavLink>
              
            </NavDropdown></NavLink>


            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success" className='searchBtn'>Search</Button> */}
            <button type='button' className='searchBtn'>Search</button>
          </Form>
      </nav>
    </div>
  )
}

export default CricbuzzNav
