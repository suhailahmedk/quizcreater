import React from "react";
import { Form, Button } from "react-bootstrap";
const Choice = () => {
    return (
        <div className="container my-4 w-50 border border-dark">
            <Form>
                <Form.Group controlId="choice">
                    <Form.Label><h1>Choice</h1></Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Add Choice..." />
                </Form.Group>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">Correct Option</label>
                </div>

                <div className="my-3 d-flex justify-content-end">
                    <Button className="mx-2 btn-light" variant="outline-dark"> Cancel</Button>
                    <Button className="btn-pramary mx-2 ">Add Choice</Button>
                </div>
            </Form>

        </div>
    )
}
export default Choice;