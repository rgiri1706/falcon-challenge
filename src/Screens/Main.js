import React, { Component } from 'react';
import styled from "styled-components";
import falcon from "../Assets/falcon.jpg";

const Image = styled.img`
    border-radius: 50%;
    width: 205px;
    height: 205px;
    border: 2px solid ;
`;

const Title = styled.div`
    font-size: 57px;
    padding-bottom: 2%; 
    width: 100%;
    font-family: 'Titillium Web', sans-serif;
`;

const ParentDiv = styled.div`
    width: 100%;
    position: absolute;
    top: 2%;
`;

class Main extends Component{
    render(){
       return (
        <ParentDiv>
            <Title>
                Finding Falcon
            </Title>
            <div>
                <Image src={falcon} alt="Bird"/>
            </div>   
        </ParentDiv>
       );
    }
}

export default Main;