import React, { useState } from 'react'
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
  } from 'mdb-react-ui-kit';
const Header =() => {
    const [ show, setShow] = useState (false);
  return (
    <div>
          <MDBNavbar expand='lg' light style={{ backgroundColor: '#333' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
           <img src='/images/Logo.png'  alt='logo' style={{height: "90px"}}/>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#fff'
            aria-controls='#fff'
            aria-expanded='false'
            aria-label='Toggle navigation'
            style={{color: "black"}}
            onClick={() => setShow(!show)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={show} navbar >
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
              <MDBNavbarLink aria-current='page' href='/' style={{ color: "#fff", fontSize: "30px" ,marginRight: "20px"  }}>
               Home
               </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink aria-current='page' href='/addBlog' style={{ color: "#fff", fontSize: "30px",marginRight: "30px" }}>Add Blog</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink aria-current='page' href='/about' style={{ color: "#fff", fontSize: "30px" }}>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header