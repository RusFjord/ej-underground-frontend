import React from 'react'
import { Form, Button } from 'react-bootstrap';

import './Registration.scss'

class Registration extends React.Component {
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

                <Form.Group controlId="formPasswordAgain">
                    <Form.Label>Повторите пароль</Form.Label>
                    <Form.Control type="password" placeholder="Повторите пароль" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Электронная почта</Form.Label>
                    <Form.Control type="email" placeholder="Электронная почта" />
                </Form.Group>
                <Form.Group controlId="formPhone">
                    <Form.Label>Телефон</Form.Label>
                    <Form.Control type="phone" placeholder="Номер телефона" />
                </Form.Group>   
                <Button className='login-form-button' type="submit">
                    Зарегистрироваться
                </Button>            
            </Form>
        )
    }
}

export default Registration