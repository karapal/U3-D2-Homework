import { Container } from "react-bootstrap"


function welcomeComponent() {
    return (
        <div className="jumbotron jumbotron-fluid d-flex align-items-center text-black ">
        <Container>
            <h1 >Welcome to our Shop</h1>
            <p >
                Let your imagination run Wild!
            </p>
        </Container>
    </div>
    );
  }
  
  export default welcomeComponent;