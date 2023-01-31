
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const navComponent = (props) => {
  const items = props.navitems
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
        <Navbar.Brand href="#">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          {items.map(item => {
              return  <Nav.Link key={item} href="#">{item}</Nav.Link>
          })}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default navComponent;

