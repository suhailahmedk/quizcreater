import React from "react";
import {Form, Button} from "react-bootstrap";
import QuestionsTable from "./QuestionsTable";

class CreateQuize extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
            textTitle: "",
            textPoints: "",
            textTime:"",
            textDate:""
          };
        
    }
    render() {
        let cancelQuize=()=>{
            this.setState({textPoints: ""}); 
            this.setState({textTitle: ""}); 
            this.setState({textDate: ""}); 
            this.setState({textTime:""}); 
            this.props.data3.cancelQuize();
        }
        const createQuize=()=>{
            this.setState({textPoints: ""}); 
            this.setState({textTitle: ""}); 
            this.setState({textDate: ""}); 
            this.setState({textTime:""}); 
            this.props.data2.createQuize();

        }
        const addQuestion = () => {
            if(this.state.textTitle===""){
                this.setState({textTitle: this.props.tempQuizArray.title}); 
            }
            if(this.state.textPoints===""){
                this.setState({textPoints: this.props.tempQuizArray.points}); 
            }
            if(this.state.textDate===""){
                this.setState({textDate: this.props.tempQuizArray.date}); 
            }
            if(this.state.textTime===""){
                this.setState({textTime: this.props.tempQuizArray.timeDuration}); 
            }
            
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
                        <Form.Control type="text" defaultValue={this.props.tempQuizArray.title} onChange={handleChangeTitle}/>
                    </Form.Group>
                    <Form.Group controlId="points">
                        <Form.Label>Total Points</Form.Label>
                        <Form.Control type="text" defaultValue={this.props.tempQuizArray.points} onChange={handleChangePoints}/>
                    </Form.Group>
                    <div className="row">
                        <div className="col">
                            <Form.Group controlId="timeAllowed">
                                <Form.Label>Time Allowed</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.tempQuizArray.timeDuration} onChange={handleChangeAllowedTime}/>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group controlId="date">
                                <Form.Label>Deadline</Form.Label>
                                <Form.Control type="date" defaultValue={this.props.tempQuizArray.date} onChange={handleChangeDate}/>
                            </Form.Group>
                        </div>
                    </div>
                    <h3 className='text-center'>Questions</h3>
                    <div className="container my-4 h-50 w-80  border border-dark ">
                        <QuestionsTable questionsList={this.props.questionsList}></QuestionsTable>
                        <div className="my-4 d-flex justify-content-end">
                            <Button className='btn-primary' onClick={() => addQuestion()}>Add Question</Button>
                        </div>
                    </div>
                    <div className="my-3 d-flex justify-content-end">
                        <Button className="mx-2 btn-light" variant="outline-dark" onClick={() => cancelQuize()}> Cancel</Button>
                        <Button className="btn-pramary mx-2" onClick={() => createQuize()}>Create Quize</Button>
                    </div>
                </Form>

            </div>
        )
    }
}

export default CreateQuize;