import logo from "./logo.svg";
import "./App.css";
import {Container,Row,Col} from "react-bootstrap";
import LeftSidePanel from "./components/LeftSidePanel";
import RightSidePanel from "./components/RightSidePanel";

function App() {
  return (
    <Container className="App">
    <Row>
      <Col sm={4}>
        <LeftSidePanel />
      </Col>
      <Col sm={8}>
        <RightSidePanel />
      </Col>
    </Row>
    </Container>
  );
}

export default App;
