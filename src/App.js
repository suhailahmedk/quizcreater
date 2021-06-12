import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CreateQuize from './CreateQuize';
import Questions from './Questions';
import Choice from './Choice';
import {useState} from 'react';

function App() {
    const [flag, setflag] = useState(0);
    const [QuestionArray, setQuestionArray] = useState([]);
    const [ChoicesArray,setChoicesArry]=useState([]);
    const [tempQuizArray, setTempQuizArray] = useState([]);
    const [tempQuestionArray,setTempQuestionArray]=useState([]);
    const [Quize,setQuize]=useState([]);
    let tempchoices=[];
   
    let cancelQuize=()=>{
        setChoicesArry([])
        setTempQuizArray([]);
        setQuestionArray([]);
        setTempQuestionArray([]);
        setflag(0);
    }
    let createQuize=()=>{
        let obj=tempQuizArray;
        let temp={title:obj.title,points:obj.points,timeDuration:obj.timeDuration,date:obj.date,questions:QuestionArray};

        setQuize(temp);
        setChoicesArry([])
        setTempQuizArray([]);
        setQuestionArray([]);
        setTempQuestionArray([]);
        console.log(temp);
        setflag(0);
    }
    let addQuestions = (title,points,timeDuration,date) => {
        let temp1=tempQuizArray;
        if(title===""){
            title=temp1.title;
        }
        if(points===""){
            points=temp1.points;
        }
        if(timeDuration===""){
            timeDuration=temp1.timeDuration;
        }
        if(date===""){
            date=temp1.date;
        }
        let temp={title,points,timeDuration,date};
        setTempQuizArray(temp);
        setflag(1);
    }
    let addChoices = (question,type,points) => {
        let temp1=tempQuestionArray;
        if(question===""){
            question=temp1.question;
        }
        if(type===""){
            type=temp1.type;
        }
        if(points===""){
            points=temp1.points;
        }
        let temp={question,type,points};
        setTempQuestionArray(temp);
        setflag(2);
    }
    let setChoice = (choice,isCorrect) => {
        let temp={choice,isCorrect};
        tempchoices=ChoicesArray;
        tempchoices.push(temp);
        setChoicesArry(tempchoices);
        setflag(1);
    }
    let cancelChoice=()=>{
        setflag(1);
    }
    let setQuestion=()=>{
        let temp=QuestionArray;
        let tempquestion=tempQuestionArray;
        let obj={question:tempquestion.question,type:tempquestion.type,points:tempquestion.points,choices:ChoicesArray};
        temp.push(obj);
        setQuestionArray(temp);
        setTempQuestionArray([]);
        setTempQuestionArray([]);
        setChoicesArry([]);
        setflag(0);
    }
    let cancelQuestion=()=>{
        setTempQuestionArray([]);
        setTempQuestionArray([]);
        setChoicesArry([]);
        setflag(0);
    }
    if (flag === 0) {
        return (
            <div className="container">
                <CreateQuize tempQuizArray={tempQuizArray} questionsList={QuestionArray} data={{addQuestions: addQuestions.bind(this)}} data2={{createQuize: createQuize.bind(this)}} data3={{cancelQuize: cancelQuize.bind(this)}}></CreateQuize>
            </div>
        );
    } else if (flag === 1) {
        return (
            <div className="container">
                <Questions tempQuestion={tempQuestionArray} choicesList={ChoicesArray} data={{addChoices: addChoices.bind(this)}} data2={{setQuestion:setQuestion.bind(this)}} data3={{cancelQuestion:cancelQuestion.bind(this)}}></Questions>
            </div>
        );
    } else if (flag === 2) {
        return (
            <div className="container">
                
                <Choice  data={{setChoice: setChoice.bind(this)}} data2={{cancelChoice: cancelChoice.bind(this)}}></Choice>
            </div>
        );
    }

}

export default App;
