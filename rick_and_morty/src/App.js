import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/form';
//import axios from 'axios';
import {Routes, Route, useLocation,useNavigate} from "react-router-dom";

const email = "jowy@gamil.com";
const password = "123asd";

function App() {
  const location= useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const login = (userData) => {
    if(userData.email === email && userData.password === password){
      setAccess(true)
      navigate('/home');
    }

  }

  useEffect(() => {
    !access && navigate('/')
  }, [access])

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  const onClose = (id) => {
    const charactersFiltered = characters.filter(character => character.id !== Number(id))  
    setCharacters(charactersFiltered)
  }
  
  return (
    <div className='App'>
      {
        location.pathname !=='/' && <Nav onSearch={onSearch}/>
        
      }
      

      <Routes>
        <Route path='/' element={<Form login={login}/>} />
        <Route path='/home' element ={ <Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  )
}
export default App;




