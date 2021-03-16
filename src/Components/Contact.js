import React from 'react'
import './Contact.scss'
import { Button, Form } from 'react-bootstrap';



function Contact() {
    return (
        <div>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="About A Job" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                    </Button>
            </Form>

        </div>
    )
}

export default Contact
