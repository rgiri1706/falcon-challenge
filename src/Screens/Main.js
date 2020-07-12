import React, { Component } from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import '../App.css';
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

const SelectTitle = styled.div`
    font-size: 37px;
    padding-top: 2%; 
    width: 100%;
    font-family: 'Titillium Web', sans-serif;
`;

const ParentDiv = styled.div`
    width: 100%;
    position: absolute;
    top: 2%;
`;

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            planet1:'',
            planet2:'',
            planet3:'',
            planet4:'',
            destination1Choice: '',
            destination2Choice: '',
            destination3Choice: '',
            destination4Choice: ''
        };
    }

    render(){
       console.log(this.state.planet);
       return (
        <ParentDiv>
            <Title>
                Finding Falcon
            </Title>
            <div>
                <Image src={falcon} alt="Bird"/>
            </div>
            <SelectTitle>
                Select planets you want to search in : 
            </SelectTitle>
            <div className="Dropdown-Boxes">
                <div className="Area">
                    <div style={{padding: "16px"}}>
                        Destination 1
                    </div>
                    <Select
                    disableUnderline
                    id="demo-simple-select"
                    className="Select-Style"
                    value={this.state.planet1}
                    onChange={(event)=> this.setState({planet1: event.target.value})}
                    >
                        <MenuItem value="10">Ten</MenuItem>
                        <MenuItem value="20">Twenty</MenuItem>
                        <MenuItem value="30">Thirty</MenuItem>
                    </Select>
                    <div style={{padding: "36px"}}>
                        <RadioGroup aria-label="gender" name="gender1" value={this.state.destination1Choice} onChange={(event)=> this.setState({destination1Choice: event.target.value})}>
                            <FormControlLabel value="female" control={<Radio />} label="Space Pod" />
                            <FormControlLabel value="male" control={<Radio />} label="Space Rocket" />
                            <FormControlLabel value="other" control={<Radio />} label="Space Shuttle" />
                            <FormControlLabel value="other1" control={<Radio />} label="Space Ship" />
                        </RadioGroup>    
                    </div>   
                </div>
                <div className="Area">
                    <div style={{padding: "16px"}}>
                        Destination 2
                    </div>
                    <Select
                    disableUnderline
                    id="demo-simple-select"
                    className="Select-Style"
                    value={this.state.planet2}
                    onChange={(event)=> this.setState({planet2: event.target.value})}
                    >
                        <MenuItem value="10">Ten</MenuItem>
                        <MenuItem value="20">Twenty</MenuItem>
                        <MenuItem value="30">Thirty</MenuItem>
                    </Select> 
                    <div style={{padding: "36px"}}>
                        <RadioGroup aria-label="gender" name="gender1" value={this.state.destination2Choice} onChange={(event)=> this.setState({destination2Choice: event.target.value})}>
                            <FormControlLabel value="female" control={<Radio />} label="Space Pod" />
                            <FormControlLabel value="male" control={<Radio />} label="Space Rocket" />
                            <FormControlLabel value="other" control={<Radio />} label="Space Shuttle" />
                            <FormControlLabel value="other1" control={<Radio />} label="Space Ship" />
                        </RadioGroup>    
                    </div>  
                </div>
                <div className="Area">
                    <div style={{padding: "16px"}}>
                        Destination 3
                    </div>
                    <Select
                    disableUnderline
                    id="demo-simple-select"
                    className="Select-Style"
                    value={this.state.planet3}
                    onChange={(event)=> this.setState({planet3: event.target.value})}
                    >
                        <MenuItem value="10">Ten</MenuItem>
                        <MenuItem value="20">Twenty</MenuItem>
                        <MenuItem value="30">Thirty</MenuItem>
                    </Select> 
                    <div style={{padding: "36px"}}>
                        <RadioGroup aria-label="gender" name="gender1" value={this.state.destination3Choice} onChange={(event)=> this.setState({destination3Choice: event.target.value})}>
                            <FormControlLabel value="female" control={<Radio />} label="Space Pod" />
                            <FormControlLabel value="male" control={<Radio />} label="Space Rocket" />
                            <FormControlLabel value="other" control={<Radio />} label="Space Shuttle" />
                            <FormControlLabel value="other1" control={<Radio />} label="Space Ship" />
                        </RadioGroup>    
                    </div>  
                </div>
                <div className="Area">
                    <div style={{padding: "16px"}}>
                        Destination 4
                    </div>
                    <Select
                    disableUnderline
                    id="demo-simple-select"
                    className="Select-Style"
                    value={this.state.planet4}
                    onChange={(event)=> this.setState({planet4: event.target.value})}
                    >
                        <MenuItem value="10">Ten</MenuItem>
                        <MenuItem value="20">Twenty</MenuItem>
                        <MenuItem value="30">Thirty</MenuItem>
                    </Select> 
                    <div style={{padding: "36px"}}>
                        <RadioGroup aria-label="gender" name="gender1" value={this.state.destination4Choice} onChange={(event)=> this.setState({destination4Choice: event.target.value})}>
                            <FormControlLabel value="female" control={<Radio />} label="Space Pod" />
                            <FormControlLabel value="male" control={<Radio />} label="Space Rocket" />
                            <FormControlLabel value="other" control={<Radio />} label="Space Shuttle" />
                            <FormControlLabel value="other1" control={<Radio />} label="Space Ship" />
                        </RadioGroup>    
                    </div>  
                </div>
                
            </div>
            <div>
                <Button variant="contained" color="primary">
                    Find Falcone !
                </Button>
            </div> 
        </ParentDiv>
       );
    }
}

export default Main;