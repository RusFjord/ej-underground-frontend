import React from 'react'
import { Container } from 'react-bootstrap'

import './Content.scss'

class Content extends React.Component {
    render() {
        return (
            <Container>
                <p>Основной контент приложения.</p>     
            </Container>
        )
      }
}

export default Content