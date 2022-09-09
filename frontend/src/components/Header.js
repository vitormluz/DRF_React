import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {
  return (
    <div>
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>

            <LinkContainer to="/">
              <Navbar.Brand>E-Commerce</Navbar.Brand>
            </LinkContainer>

              <Navbar.Toggle aria-controls='basic-nav-bar' />
              <Navbar.Collapse id='basic-nav-bar'>
                <Nav className='mr-auto'>

                  <LinkContainer to='/cart'>
                    <Nav.Link><i className='fas fa-shopping-cart'></i> Carrinho</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to='/login'>
                    <Nav.Link><i className='fas fa-user'></i> Login</Nav.Link>
                  </LinkContainer>

                </Nav>
              </Navbar.Collapse>

          </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Header
