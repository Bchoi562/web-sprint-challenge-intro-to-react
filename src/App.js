import React, { useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character';
import Films from './Films';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);

  // const [bday , setBday] = useState();
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    axios
    .get(`https://swapi.dev/api/people/`)
    // .then(res=> setPeople(res.data.results)
    
    // )
    
    .then((res)=>{
      setPeople(res.data.results);
    
      
    })



    .catch((err)=>{
      console.log(err);
    })
  }, []);
 


 

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        people.map(p=>{
       return <Character 
       name={p.name} 
       birthyear={p.birth_year} 
       mass={p.mass}
       gender={p.gender}
       height={p.height}
      //  films={}
       />
        
       })
      }
    </div>
  );
}



export default App;
