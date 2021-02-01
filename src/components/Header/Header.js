import { Col, Container, Row } from 'react-bootstrap';
import eujlogo from './ejulogo.png'
import './Header.scss'

function Header() {
    return (
      <header className="Header">
        <Container>
          <Row>
            <Col xs lg='2'>
              <img src={eujlogo} alt='logo'/>
            </Col>
            <Col className='col-site-name'>
              <div className='site-title'>
                <h1>EJ Underground</h1>
                <p>Электронный журнал для учета забросок и выбросок.</p>
              </div>         
            </Col>
          </Row>
        </Container>         
      </header>
    )
  }
  
  export default Header