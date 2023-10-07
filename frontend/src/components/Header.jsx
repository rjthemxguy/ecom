import {Badge, Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import logo from '../assets/logo.png'
import {LinkContainer} from 'react-router-bootstrap'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'


const Header = () => {

  const {cartItems} = useSelector((state) => state.cart);
  
  
  return (
   <header>
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>

    <Container>

      <LinkContainer to="/">
      <Navbar.Brand>
        <img src={logo}/>
        Proshop
      </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='ms-auto'>

          <LinkContainer to="/cart">
            <Nav.Link href="/cart"><FaShoppingCart/>Cart
            {
              cartItems.length > 0 && (
                <Badge pill bg="success" style={{marginLeft : '5px'}}>
                    {cartItems.reduce((a,c) => a + c.qty, 0)}
                </Badge>
              )
            }
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to="login">
            <Nav.Link href="login"><FaUser/>Login</Nav.Link>
          </LinkContainer>
        </Nav>

      </Navbar.Collapse>

    </Container>
    </Navbar>
   </header>
  )
}

export default Header
