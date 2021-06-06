import React from "react";
import { Form, Button } from "react-bootstrap";
import QuestionsTable from "./QuestionsTable";
const CreateQuize = () => {
    return (
        <div className="container my-4 w-50 border border-dark">
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
                <div className="row">
                    <div className="col">
                        <Form.Group controlId="timeAllowed">
                            <Form.Label>Time Allowed</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group controlId="points">
                            <Form.Label>Deadline</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </div>
                </div>
                <h3 className='text-center'>Questions</h3>
                <div className="container my-4 h-50 w-80  border border-dark ">
                    <QuestionsTable></QuestionsTable>
                    <div className="my-4 d-flex justify-content-end">
                        <Button className='btn-primary '>Add Question</Button>
                    </div>
                </div>
                <div className="my-3 d-flex justify-content-end">
                    <Button className="mx-2 btn-light" variant="outline-dark"> Cancel</Button>
                    <Button className="btn-pramary mx-2 ">Create Quize</Button>
                </div>
            </Form>

        </div>
    )
}
export default CreateQuize;