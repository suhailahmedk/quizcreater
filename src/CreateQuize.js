import React from "react";
import {Form, Button} from "react-bootstrap";
import {render} from "react-dom";
import Questions from "./Questions";
import QuestionsTable from "./QuestionsTable";

class CreateQuize extends React.Component {

    render() {
        const addQuestion = () => {
            this.props.data.addQuestions(this.state.textTitle,this.state.textPoint,this.state.textTime,this.state.textDate);
        }
        const handleChangeTitle = (evt) => {
            this.setState({textTitle: evt.target.value.substr(0, 100)});
        }
        const handleChangePoints=(evt)=> {
            this.setState({ textPoint: evt.target.value.substr(0, 100) });
          }
        const handleChangeAllowedTime=(evt)=> {
            this.setState({ textTime: evt.target.value.substr(0, 100) });
          }
        const handleChangeDate=(evt)=> {
            this.setState({ textDate: evt.target.value.substr(0, 100) });
          }

        return (
            <div className="container my-4 w-50 border border-dark">
                <h1 className='text-center'>Create Quiz</h1>
                <Form>
                    <Form.Group controlId="quizTitle">
                        <Form.Label>Quiz Title</Form.Label>
                        <Form.Control type="text" onChange={handleChangeTitle}/>
                    </Form.Group>
                    <Form.Group controlId="points">
                        <Form.Label>Total Points</Form.Label>
                        <Form.Control type="text" onChange={handleChangePoints}/>
                    </Form.Group>
                    <div className="row">
                        <div className="col">
                            <Form.Group controlId="timeAllowed">
                                <Form.Label>Time Allowed</Form.Label>
                                <Form.Control type="text" onChange={handleChangeAllowedTime}/>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group controlId="points">
                                <Form.Label>Deadline</Form.Label>
                                <Form.Control type="date" onChange={handleChangeDate}/>
                            </Form.Group>
                        </div>
                    </div>
                    <h3 className='text-center'>Questions</h3>
                    <div className="container my-4 h-50 w-80  border border-dark ">
                        <QuestionsTable></QuestionsTable>
                        <div className="my-4 d-flex justify-content-end">
                            <Button className='btn-primary' onClick={() => addQuestion()}>Add Question</Button>
                        </div>
                    </div>
                    <div className="my-3 d-flex justify-content-end">
                        <Button className="mx-2 btn-light" variant="outline-dark"> Cancel</Button>
                        <Button className="btn-pramary mx-2">Create Quize</Button>
                    </div>
                </Form>

            </div>
        )
    }
}

export default CreateQuize;