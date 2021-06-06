import React from "react";
import { Form, Button } from "react-bootstrap";
const Questions = () => {
    return (
        <div className="container my-4 w-50 border border-dark">
            <Form>
                <Form.Group controlId="question">
                    <Form.Label><h1>Question</h1></Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Add Question..." />
                </Form.Group>

                <div className="row">
                    <div className="col">

                        <Form.Label>Type</Form.Label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                            <label className="form-check-label" for="flexRadioDefault1">Single Choice</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" for="flexRadioDefault2">Multiple Choice</label>
                        </div>
                    </div>
                    <div className="col">
                        <Form.Group controlId="points">
                            <Form.Label>Points</Form.Label>
                            <Form.Control type="Points" />
                        </Form.Group>
                    </div>
                </div>

                <h3 className='text-center'>Choices</h3>
                <div className="container my-4 h-50 w-80  border border-dark">
                    <div className="d-flex justify-content-end">
                        <Button className='btn-primary'>Add Choice</Button>
                    </div>
                </div>
                <div className="my-3 d-flex justify-content-end">
                    <Button className="mx-2 btn-light" variant="outline-dark"> Cancel</Button>
                    <Button className="btn-pramary mx-2 ">Create</Button>
                </div>
            </Form>

        </div>
    )
}
export default Questions;