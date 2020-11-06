import React, { useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);
  const [bday , setBday] = useState();
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    axios
    .get(`https://swapi.dev/api/people/`)
    .then(res=> res.data.results.map(char=>char.name))
    .then(ppl=>setPeople(ppl))
    
    .catch((err)=>{
      console.log(err);
    })
  }, []);
 


 
 console.log(people);
 
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        people.map(p=><StyledDiv>{p}</StyledDiv>)
      }
    </div>
  );
}

const StyledDiv = styled.div`
border:1px solid black;
padding:10px;
`

export default App;
