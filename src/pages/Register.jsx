import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import PersonIcon from 'react-bootstrap-icons/dist/icons/person-circle'
import EmailIcon from 'react-bootstrap-icons/dist/icons/envelope-open-fill'
import KeyIcon from 'react-bootstrap-icons/dist/icons/key-fill'
import PersonLineIcon from 'react-bootstrap-icons/dist/icons/person-lines-fill'
import PeopleFillIcon from 'react-bootstrap-icons/dist/icons/people-fill'
import EyeIcon from 'react-bootstrap-icons/dist/icons/eye-fill'
import Button from 'react-bootstrap/Button'

import Colors from '../assets/Colors'

function Register(props) {

    const styles = {
        box: {
            width: "80%",
            borderRadius: "5vh",
        },
        column: {
            height: "fit-content",
        },
        round: {
            bottom: "-30px",
            right: "-30px",
            borderRadius: "6vh",
            height: "10em",
            width: "10rem",
            backgroundColor: Colors.lightBlue,
        },
        forms: {
            zIndex: 3,
            width: '100%',
            padding: "10px",
        },
        loginBtn: {
            fontWeight: "bold",
            backgroundColor: Colors.lightBlue,
            border: "none",
            borderRadius: "2rem",
        }
    }

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        gender: '',
        email: '',
        password: '',
        tst: ''
    });

    const { first_name, last_name, gender, email, password, tst } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    useEffect(
        () => {
            document.title = "Register"
        }, []
    )

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const eyeToggle = () => {
        var element = document.getElementById('pass')
        if (element.getAttribute('type') === 'password') {
            element.setAttribute('type', 'text')
        }
        else
            element.setAttribute('type', 'password')
    }

    return (
        <>
            <Container>
                <Row>
                    <Col lg={3}>
                    </Col>
                    <Col lg={6} style={styles.column} className="p-1 my-5 d-flex justify-content-center">
                        <div style={styles.box} className="d-flex align-items-center flex-column overflow-hidden p-2 shadow-box position-relative h-75">

                            <div className="animate-spin position-absolute" style={styles.round}>
                            </div>

                            <div style={styles.forms}>
                                <div className="d-flex my-2 flex-column align-items-center justify-content-center">
                                    <PersonIcon size={50} color={Colors.lightBlue} />
                                    <h3 style={{ color: Colors.lightBlue, marginTop: "20px", fontSize: 35 }}>REGISTER</h3>
                                </div>
                                <Form className="d-flex flex-column" onSubmit={(e) => onSubmit(e)}>

                                    {/* First Name */}
                                    <Form.Group controlId="first_name" className="my-3">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{ backgroundColor: 'transparent', border: 'none' }}>
                                                    <PersonLineIcon size={20} style={{ color: Colors.lightBlue }} />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control className="custom-button" type="text" placeholder="Enter First Name" name="first_name"
                                                value={first_name}
                                                onChange={(e) => onChange(e)} />
                                        </InputGroup>
                                    </Form.Group>
                                    {/* Last Name */}
                                    <Form.Group controlId="last_name" className="my-3">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{ backgroundColor: 'transparent', border: 'none' }}>
                                                    <PersonLineIcon size={20} style={{ color: Colors.lightBlue }} />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control className="custom-button" type="text" placeholder="Enter Last Name" name="last_name"
                                                value={last_name}
                                                onChange={(e) => onChange(e)} />
                                        </InputGroup>
                                    </Form.Group>
                                    {/* Gender */}
                                    <Form.Group controlId="gender" className="my-3">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{ backgroundColor: 'transparent', border: 'none' }}>
                                                    <PeopleFillIcon size={20} style={{ color: Colors.lightBlue }} />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control className="custom-button" name="gender" as="select"
                                                value={gender}
                                                onChange={(e) => onChange(e)} >
                                                <option value='' disabled>Choose gender</option>
                                                <option value='Male'>Male</option>
                                                <option value='Female'>Female</option>
                                            </Form.Control>
                                        </InputGroup>
                                    </Form.Group>
                                    {/* Email Address */}
                                    <Form.Group controlId="email" className="my-3">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{ backgroundColor: 'transparent', border: 'none' }}>
                                                    <EmailIcon size={20} style={{ color: Colors.lightBlue }} />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control className="custom-button" type="email" placeholder="Enter Email" name="email"
                                                value={email}
                                                onChange={(e) => onChange(e)} />
                                        </InputGroup>
                                    </Form.Group>
                                    {/* Password */}
                                    <Form.Group controlId="password" className="my-3">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{ backgroundColor: 'transparent', border: 'none' }}>
                                                    <KeyIcon size={20} style={{ color: Colors.lightBlue }} />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control className="custom-button" type="password" placeholder="Enter Password" name="password"
                                                value={password}
                                                id="pass"
                                                onChange={(e) => onChange(e)}
                                                minLength="6" />
                                            <EyeIcon size={20} className="d-flex align-self-center" onClick={() => eyeToggle()} style={{ color: Colors.lightBlue, cursor: 'pointer' }} />
                                        </InputGroup>
                                    </Form.Group>

                                    <Button type="submit" style={styles.loginBtn} className="my-4 buttons letter-spacing-3 align-self-center w-50">R E G I S T E R</Button>

                                </Form>
                                <p>Already have an account? <Link to="/login" className="text-decoration-none" >Login</Link></p>
                            </div>

                        </div>
                    </Col>
                    <Col lg={3}>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Register;