import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CreateQuize from './CreateQuize';
import Questions from './Questions';
import Choice from './Choice';
import {useState} from 'react';

function App() {
    const [flag, setflag] = useState(0);
    const [QuizArray, setQuizArray] = useState([]);
    const [ChoicesArray,setChoicesArry]=useState([]);
    let tempArray;
    let tempQuestion;
    let tempchoices=[];
    let addQuestions = (title,points,timeDuration,date) => {
        alert(title+" "+points+" "+timeDuration+" "+date);
        let temp={title,points,timeDuration,date};
        tempArray=temp;
        console.log(tempArray);
        setflag(1);
    }
    let addChoices = (question,type,points) => {
        alert(question+" "+type+" "+points);
        let temp={question,type,points};
        tempQuestion=temp;
        setflag(2);
        console.log(tempQuestion);
    }
    let setChoice = (choice,isCorrect) => {
        alert(choice+" "+isCorrect);
        let temp={choice,isCorrect};
        tempchoices=ChoicesArray;
        tempchoices.push(temp);
        setChoicesArry(tempchoices);
        setflag(1);
    }
    if (flag == 0) {
        return (
            <div className="container">
                <CreateQuize data={{addQuestions: addQuestions.bind(this)}}></CreateQuize>
            </div>
        );
    } else if (flag == 1) {
        return (
            <div className="container">
                <Questions choicesList={ChoicesArray} data={{addChoices: addChoices.bind(this)}}></Questions>
            </div>
        );
    } else if (flag == 2) {
        return (
            <div className="container">
                <Choice  data={{setChoice: setChoice.bind(this)}}></Choice>
            </div>
        );
    }

}

export default App;
