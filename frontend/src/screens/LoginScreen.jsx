import { useState } from "react"
import {Link} from "react-router-dom"
import {Form, Button, Row, Col, FormLabel, FormControl} from "react-bootstrap"
import FormContainer from "../components/FormContainer"



const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=> {
        e.preventDefault();
        console.log('submit')
    }

  return (
    <FormContainer>
      <h1>Sign In</h1>

        <Form onSubmit={submitHandler}>
            <Form.Group controlId="email" className="my-3">
                <FormLabel>Email Address</FormLabel>
                <FormControl
                type="email"
                placeholder="Enter Email"
                value = {email}
                onChange={(e)=> setEmail(e.target.value)}
                />

            </Form.Group>

            <Form.Group controlId="password" className="my-3">
                <FormLabel>Password</FormLabel>
                <FormControl
                type="password"
                placeholder="Enter Password"
                value = {password}
                onChange={(e)=> setPassword(e.target.value)}
                />

            </Form.Group>
                <Button type="submit" variant='primary' className="mt-2">
                    Sign In
                </Button>
        </Form>

        <Row className="py-3">

            <Col>
            New Customer? <Link to ="/register">Register</Link>
            </Col>

        </Row>

    </FormContainer>
  )
}

export default LoginScreen
