// Write your Character component here
import React,{useEffect, useState} from "react";
import axios from 'axios';
import styled from 'styled-components';
import Films from "../Films";

export default function Character(props){

    const {name, birthyear, mass, gender, height} = props;

    const [film, setFilm] = useState([]);

    useEffect(()=>{
        axios
        .get('https://swapi.dev/api/films/')
        .then((res)=>{
            setFilm(res.data.results)
            console.log(res.data.results)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);


    return (
        <div>
            <div>
                <h2>{name}</h2>
                <StyledDiv>
                    <div>Birth Year: {birthyear}</div>
                    <div>Mass: {mass}</div>
                    <div>Gender: {gender}</div>
                    <div>Height: {height}</div>
                    <div>Films:{film.map(f=>{
                        return <Films
                        films={f.title}
                        />

                    })}</div>
                </StyledDiv>
             </div>
        </div>

)


}
const StyledDiv = styled.div`
border:1px solid black;
padding:10px;
width:20%;
margin-left:40%;
background-color:grey;
color:white;

&:hover{
    transform:scale(1.1);
    transition:transform 0.5s ease-in-out;
    padding-right:200px;
    padding-top:60px;
    
}
`