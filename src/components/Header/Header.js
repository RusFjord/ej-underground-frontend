import { Container } from 'react-bootstrap';
import './Header.css'

function Header() {
    return (
      <header className="Header">
        <Container>
          <h2>EJ Underground</h2>
          <p>Электронный журнал для учета забросок и выбросок.</p>
        </Container>         
      </header>
    )
  }
  
  export default Header