import React, {useState} from 'react';
import axios from 'axios';
import { Button, InputGroup, FormControl, Form, Spinner, Container } from 'react-bootstrap';

function Login() {
    const [ loading, setLoading ] = useState(false);
    const [userData, setUserData] = useState({
        Email: '', Password: ''
    });
    
    const handleLogin = async(e) => {
        e.preventDefault();
        setLoading(true)

        const { Email, Password, Quantity, Image } = userData;
        try{
            const response = await axios.post(`http://localhost:3000/api/login`, {
                email: Email.trim(),
                password: Password.trim(),
            }, {
                headers:{
                    'Content-Type': 'application/json',
                },
            })
            if (response.status === 201) {
                setLoading(false)
                alert('Product Created Successfully')
            }
        } catch (e){
            console.log("Error while creating product " + e)
        }

    }

    const formData = [
        {type: 'email', placeholder: 'Enter Email', ariaLabel: 'email', name: 'email', value: userData.Email, onChng: (e) => setUserData({...userData, Email: e.target.value})},
        {type: 'password', placeholder: 'Enter Password', ariaLabel: 'password', name: 'password', value: userData.Password, onChng: (e) => setUserData({...userData, Password: e.target.value})},
    ]

return (
    <>
        <Container className="p-3 my-5 d-flex flex-column justify-content-center form"
        style={{height: '80vh', width: '65%'}}>
            <h1 className='text-center text-primary fw-bold' 
            style={{paddingBottom: '1rem', borderBottom: '0.28rem solid #0D6EFD'}}>
                Login
            </h1>
            <Form onSubmit={handleLogin} className='mt-5'>
                {
                    formData.map((curElm, index) => {
                        const {type, placeholder, ariaLabel, name, value, onChng} = curElm; 
                        return(
                        <Form.Group className="mb-4" key={index}>
                            <InputGroup>
                                <FormControl type={type} placeholder={placeholder} aria-label={ariaLabel} required
                                name={name} value={value} key={index} onChange={onChng}/>
                            </InputGroup>
                        </Form.Group>
                        )
                    })
                }
            <Button type="submit" className="mb-4 w-100 form-control" disabled={loading}>
                Login {loading ? <Spinner animation="border" size="sm" /> : ''}
            </Button>
            </Form>
        </Container>
    </>
)}

export default Login;