import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';

function App() {
  let message = '리액트 프론트엔드 개발중';

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="main-nav">
        <Container>
          <Navbar.Brand href="#home" className="nav-title">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      <h4 style={ {color : 'blue', fontSize : '16px'} }>{ message }</h4>
      
    </div>

   

  );
}

export default App;
