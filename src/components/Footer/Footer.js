import { Container } from 'react-bootstrap'

import './Footer.scss'

function Footer() {
  return (   
    <footer className='fixed-bottom'>
        <Container>
          <p>{ new Date().getFullYear() } &copy; ULTeam8</p>
        </Container>    
    </footer>
  )
}

export default Footer