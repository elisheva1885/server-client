import logo from './logo.svg';
import './App.css';
import FilterButton from "./Components/FilterButton"
import AllToDos from './Components/AllToDos';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
    <ul>
      <li>
    <Link to={'/AllToDos' }>All</Link>
    
    </li>
    <br/>
    <li>
    <Link to={'/' }>Home</Link>
    </li>
    </ul>
    <Routes>
      <Route path='/AllToDos' element={<AllToDos />}/>
      <Route path='/'/>

    </Routes>
    <h5>"uploading to git"<h5/>
    </>
  );
}

export default App;
