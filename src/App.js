import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CreateQuize from './CreateQuize';
import Questions from './Questions';
import Choice from './Choice';

function App() {
  return (
    <div className="container">
      <CreateQuize></CreateQuize>
    </div>
  );
}

export default App;
