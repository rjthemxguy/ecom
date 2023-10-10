import { useState, useEffect } from "react"
import {Link, useLocation, useNavigate} from "react-router-dom"
import {Form, Button, Row, Col, FormLabel, FormControl} from "react-bootstrap"
import FormContainer from "../components/FormContainer"
import { useDispatch, useSelector } from "react-redux"
import { useLoginMutation } from "../slices/usersApiSlice"
import { setCredentials } from "../slices/authSlice"
import {toast} from "react-toastify"

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login, {isLoading}] = useLoginMutation();
    const {userInfo} = useSelector((state) =>state.auth)

    const search = useLocation()
    const sp = new URLSearchParams(search)
    const redirect = sp.get('redirect') || '/'

    useEffect(()=>{

        if(userInfo) {
            navigate(redirect)
        }
    },[navigate, redirect, userInfo])

    const submitHandler = async (e)=> {
        e.preventDefault();
        
        try {
        
            
           const res = await login({email, password}).unwrap()
            dispatch(setCredentials({...res}))
            navigate(redirect)

        } catch (error) {
            
            toast.error(error?.data?.message || error.error)
        }

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
