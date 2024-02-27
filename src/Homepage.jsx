import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
// import './Components/Homepage.css';

function ColorSchemesExample() {

    const navigate = useNavigate()

    const handleclick=()=>{
        navigate('/signup')
    }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className='tit'>Password Reset Task</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  href="#home" onClick={handleclick}>Signup</Nav.Link>
            <Nav.Link href="#features" onClick={()=>{navigate('/signin')}}>Signin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;