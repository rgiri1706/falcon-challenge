import React, { Component } from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import { planetListRequest , vehicleListRequest } from '../store/actions/planets.js';
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
            destination1Choice: null,
            destination2Choice: null,
            destination3Choice: null,
            destination4Choice: null
        };
    }

    componentWillMount(){
        const { requestPlanetList } = this.props;
        requestPlanetList();
    }

    componentDidMount(){
        const { requestVehicleList } = this.props;
        requestVehicleList();
    }
    handleAircraftTally=(aircraftName)=>{
        
    }
    render(){
       const { vehicleList , planetList , spacePodTotal, spaceRocketTotal, spaceShuttleTotal, spaceShipTotal } = this.props;
       let arr = [];
       arr.push(spacePodTotal, spaceRocketTotal, spaceShuttleTotal, spaceShipTotal);
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
                        {planetList.map((option,i) => (
                           <MenuItem value={option.name} key={i}>{option.name}</MenuItem>
                        ))}
                    </Select>
                    <div style={{padding: "36px"}}>
                        <RadioGroup aria-label="gender" name="gender1" value={this.state.destination1Choice} onChange={(event)=> this.setState({destination1Choice: event.target.value})}>    
                                {vehicleList.map((option,i) => (
                                            <FormControlLabel onClick={()=> this.handleAircraftTally(option.name)} key= {i} value={option.name} control={<Radio />} label={option.name+" "+" ( " + arr[i] +" ) " } />
                                ))}
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
                         {planetList.map((option,i) => (
                           <MenuItem value={option.name} key={i}>{option.name}</MenuItem>
                        ))}
                    </Select> 
                    <div style={{padding: "36px"}}>
                        <RadioGroup aria-label="gender" name="gender1" value={this.state.destination2Choice} onChange={(event)=> this.setState({destination2Choice: event.target.value})}>
                             {vehicleList.map((option,i) => (
                                <FormControlLabel onClick={()=> this.handleAircraftTally(option.name)} key= {i} value={option.name} control={<Radio />} label={option.name+" "+" ( " + arr[i] +" ) " } />
                            ))}
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
                        {planetList.map((option,i) => (
                           <MenuItem value={option.name} key={i}>{option.name}</MenuItem>
                        ))}
                    </Select> 
                    <div style={{padding: "36px"}}>
                        <RadioGroup aria-label="gender" name="gender1" value={this.state.destination3Choice} onChange={(event)=> this.setState({destination3Choice: event.target.value})}>
                            {vehicleList.map((option,i) => (
                                <FormControlLabel onClick={()=> this.handleAircraftTally(option.name)} key= {i} value={option.name} control={<Radio />} label={option.name+" "+" ( " + arr[i] +" ) " } />
                            ))}
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
                         {planetList.map((option,i) => (
                           <MenuItem value={option.name} key={i}>{option.name}</MenuItem>
                        ))}
                    </Select> 
                    <div style={{padding: "36px"}}>
                        <RadioGroup aria-label="gender" name="gender1" value={this.state.destination4Choice} onChange={(event)=> this.setState({destination4Choice: event.target.value})}>
                             {vehicleList.map((option,i) => (
                                <FormControlLabel onClick={()=> this.handleAircraftTally(option.name)} key= {i} value={option.name} control={<Radio />} label={option.name+" "+" ( " + arr[i] +" ) " } />
                             ))}
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

const mapStateToProps = state => ({
    planetList: state.planets.planetList,
    vehicleList: state.planets.vehicleList,
    spacePodTotal: state.planets.spacePodTotal,
    spaceRocketTotal: state.planets.spaceRocketTotal,
    spaceShuttleTotal: state.planets.spaceShuttleTotal,
    spaceShipTotal: state.planets.spaceShipTotal
  })
  
  const mapDispatchToProps = dispatch => ({
    requestPlanetList: () => dispatch(planetListRequest()),
    requestVehicleList: () => dispatch(vehicleListRequest())
  })

export default connect(mapStateToProps, mapDispatchToProps)(Main);