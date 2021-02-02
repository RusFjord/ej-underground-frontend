import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './Login.scss'

class Login extends React.Component {

    render() {
        return (
            <Form className='login-form'>
                <Form.Group controlId="formLogin">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control type="email" placeholder="Введите логин" />
                    <Form.Text className="text-muted">
                    В качестве логина используется адрес электронной почты или номер телефона
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Пароль" />
                </Form.Group>
                <Button className='login-form-button' type="submit">
                    Submit
                </Button>               
            </Form>
        )
    }
}

export default Login