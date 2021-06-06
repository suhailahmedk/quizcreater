import React from "react";
import { Form,Button } from "react-bootstrap";
const CreateQuize = () => {
    return (
        <div className= "container my-4 w-50 border border-dark">
            <h1 className='text-center'>Create Quiz</h1>
                <Form>
                    <Form.Group controlId="quizTitle">
                        <Form.Label>Quiz Title</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="points">
                        <Form.Label>Total Points</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group controlId="timeAllowed">
                        <div className="row">
                            <div className="col">
                                <Form.Label>Time Allowed</Form.Label>
                                <Form.Control type="text" />
                            </div>
                            <div className="col">
                                <Form.Label>Deadline</Form.Label>
                                <Form.Control type="date" />
                            </div>
                        </div>
                    </Form.Group>
                    <h3 className='text-center'>Questions</h3>
                    <div className= "container my-4 h-50 w-80  border border-dark">
                    <Button className='btn-primary'>Add Question</Button>
                    </div>
                    <div className="my-3 d-flex justify-content-end">
                    <Button className="mx-2 btn-light" variant="outline-dark"> Cancel</Button>
                    <Button className="btn-pramary mx-2 ">Creat Quize</Button>
                    </div>
                </Form>

        </div>
    )
}
export default CreateQuize;