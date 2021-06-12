import React from "react";
import { Form, Button } from "react-bootstrap";
import ChoiceTable from "./ChoiceTable";
class Questions extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {
            
            textQuestion: "",
            textType: "",
            textPoints:""
          };
        
    }
    render() {
        const cancelQuestion=()=>{
            this.props.data3.cancelQuestion();
        }
        const addChoices = () => {
            if(this.state.textQuestion===""){
                this.setState({textQuestion: this.props.tempQuestion.question}); 
            }
            if(this.state.textPoints===""){
                this.setState({textPoints: this.props.tempQuestion.points}); 
            }
            if(this.state.textType===""){
                this.setState({textType: this.props.tempQuestion.type}); 
            }
           
            this.props.data.addChoices(this.state.textQuestion, this.state.textType, this.state.textPoints);
            
        }
        const addQuestion = () => {
            this.props.data2.setQuestion();
    
        }
        const handleChangeQuestion = (evt) => {
            this.setState({ textQuestion: evt.target.value.substr(0, 100) });

        }
        const handleChangeType = (evt) => {
            this.setState({ textType: evt.target.value });
        }
        const handleChangePoints = (evt) => {
            this.setState({ textPoints: evt.target.value.substr(0, 100) });
        }
        return (
            <div className="container my-4 w-50 border border-dark">
                <Form>
                    <Form.Group controlId="question">
                        <Form.Label><h1>Question</h1></Form.Label>
                        <Form.Control as="textarea" rows={3} defaultValue={this.props.tempQuestion.question} placeholder="Add Question..." onChange={handleChangeQuestion} />
                    </Form.Group>

                    <div className="row">
                        <div className="col">

                            <Form.Label>Type</Form.Label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1" value="Single Choice" onChange={handleChangeType} />
                                <label className="form-check-label" for="flexRadioDefault1">Single Choice</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault2" value="Multiple Choice" onChange={handleChangeType} />
                                <label className="form-check-label" for="flexRadioDefault2">Multiple Choice</label>
                            </div>
                        </div>
                        <div className="col">
                            <Form.Group controlId="points">
                                <Form.Label>Points</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.tempQuestion.points} onChange={handleChangePoints} />
                            </Form.Group>
                        </div>
                    </div>

                    <h3 className='text-center'>Choices</h3>
                    <div className="container my-4 h-50 w-80  border border-dark">
                        <ChoiceTable choicesList={this.props.choicesList}></ChoiceTable>
                        <div className="d-flex justify-content-end my-2">
                            <Button className='btn-primary' onClick={() => addChoices()}>Add Choice</Button>
                        </div>
                    </div>
                    <div className="my-3 d-flex justify-content-end">
                        <Button className="mx-2 btn-light" variant="outline-dark"  onClick={() => cancelQuestion()}> Cancel</Button>
                        <Button className="btn-pramary mx-2 " onClick={() => addQuestion()}>Create</Button>
                    </div>
                </Form>

            </div>
        )

    }
}
export default Questions;