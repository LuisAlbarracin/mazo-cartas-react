import "./App.css";
import Carta from "./components/carta";
import Header from "./components/header";
import Footer from "./components/footer";
import Formulario from "./components/formulario";
import Tabla from "./components/tabla";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Datos from './assets/data/data.json';

function guardarDatos(){
  localStorage.setItem("cartas", JSON.stringify(Datos));
}

function App() {
  guardarDatos()
  return (
    <div className="App">
      <Header src="./img/logo.png" />
      <Container>
        <Row>
          <Col lg={8} sm={12}>
            <div className="Cartas">
              <Carta src="./img/1.png" alt="Carta 1" id={'1'} />
              <Carta src="./img/2.png" alt="Carta 2" id={'2'} />
              <Carta src="./img/3.png" alt="Carta 3" id={'3'} />
              <Carta src="./img/4.png" alt="Carta 4" id={'4'} />
              <Carta src="./img/5.png" alt="Carta 5" id={'5'} />
              <Carta src="./img/6.png" alt="Carta 6" id={'6'} />
              <Carta src="./img/7.png" alt="Carta 7" id={'7'} />
              <Carta src="./img/8.png" alt="Carta 8" id={'8'} />
              <Carta src="./img/9.png" alt="Carta 9" id={'9'} />
              <Carta src="./img/10.png" alt="Carta 10" id={'10'} />
              <Carta src="./img/11.png" alt="Carta 11" id={'11'} />
              <Carta src="./img/12.png" alt="Carta 12" id={'12'} />
              <Carta src="./img/13.png" alt="Carta 13" id={'13'} />
            </div>
          </Col>

          <Col lg="4" sm="12">
            <Tabla />
            <Formulario />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
