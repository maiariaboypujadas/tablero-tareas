import { NavLink} from 'react-router-dom';
import './App.css';
//import Cards from './components/Cards';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <h1>Proyectos</h1>
      <nav>
        <NavLink exact to="/home">{Home}</NavLink>
        {/* <NavLink exact to="/project">{Cards}</NavLink> */}
      </nav>
 
  
    </div>
  );
}

export default App;
