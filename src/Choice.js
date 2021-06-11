import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Choice extends React.Component {
    constructor() {
        super();
        this.state = {
          isCorrect: false
        };
      }
    render() {
        const addChoice = () => {
            this.props.data.setChoice(this.state.textChoice,this.state.isCorrect);
        }
        // const cancelChoice = () => {
        //     this.props.data.setChoice(this.state.textChoice,this.state.isCorrect);
        // }
        const handleChangeChoice = (evt) => {
            this.setState({textChoice: evt.target.value.substr(0, 100)});
        }
        
        const handleChangeCorrect=(evt)=> {
            this.setState({isCorrect: !this.state.isCorrect});
          }

        return (
            <div className="container my-4 w-50 border border-dark">
                <Form>
                    <Form.Group controlId="choice">
                        <Form.Label><h1>Choice</h1></Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Add Choice..." onChange={handleChangeChoice}/>
                    </Form.Group>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleChangeCorrect}/>
                        <label class="form-check-label" for="flexCheckDefault">Correct Option</label>
                    </div>

                    <div className="my-3 d-flex justify-content-end">
                        <Button className="mx-2 btn-light" variant="outline-dark"> Cancel</Button>
                        <Button className="btn-pramary mx-2 " onClick={() => addChoice()}>Add Choice</Button>
                    </div>
                </Form>

            </div>
        )
    }
}
export default Choice;