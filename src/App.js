import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import './App.css';
import CreateQuize from './CreateQuize';

function App() {
  return (
    <div className="container">
     <CreateQuize></CreateQuize>
    </div>
  );
}

export default App;
