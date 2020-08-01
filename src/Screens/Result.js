import React, { Component } from 'react';
import styled from "styled-components";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../App.css';
import falcon from "../Assets/falcon.jpg";

const ParentDiv = styled.div`
    width: 100%;
    position: absolute;
    top: 82px;
    color: white;
    background-color: #282c34;
    min-height: 100vh;
`;

const Image = styled.img`
    border-radius: 50%;
    width: 205px;
    height: 205px;
    margin-top: 5%;
    border: 2px solid ;
`;

const SelectTitle = styled.div`
    font-size: 37px;
    padding-top: 2%; 
    width: 100%;
    font-family: 'Titillium Web', sans-serif;
`;

class Main extends Component{
    render(){
        const { searchResult } = this.props;
        const { data } =this.props.location;
        console.log(data);
       return (
        <ParentDiv>
            
            <div>
                <Image src={falcon} alt="Bird"/>
            </div>
          {(searchResult.status==="success") ? (
            <div>
                <SelectTitle>
                    Success ! Congratulations on Finding Falcone . King Shan is mighty Pleased. 
                </SelectTitle>
                <SelectTitle>
                    Planet Found: {searchResult.planet_name}
                </SelectTitle>
                <SelectTitle>
                    Total Time: {data}
                </SelectTitle>
            </div>
            ):
            (
                <SelectTitle>
                    The Falcone is wiser than the king thinks
                </SelectTitle>
            )}
            <div style={{position: "relative", top: 150}}>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <Button variant="contained" color="primary" style={{width: 250}}>
                        Start Again
                    </Button>
                </Link>
            </div>  
        </ParentDiv>
       );
    }
}

const mapStateToProps = state => ({
    searchResult: state.planets.searchResult
  })
  
  const mapDispatchToProps = dispatch => ({

  })

export default connect(mapStateToProps, mapDispatchToProps)(Main);