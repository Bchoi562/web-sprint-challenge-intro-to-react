import React,{useEffect, useState} from "react";
import axios from 'axios';
import styled from 'styled-components';

export default function Films(props){

    const {films} = props;

   

    return (
        <ul>
            <li>{films}</li>

        </ul>

    )
}