import React, { Component } from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import { planetListRequest , vehicleListRequest , spacePodTally , spaceRocketTally , spaceShuttleTally, spaceShipTally , getTokenRequest , findFalconeRequest } from '../store/actions/planets.js';
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
            distance1: null,
            distance2: null,
            distance3: null,
            distance4: null,
            destination1Choice: null,
            destination2Choice: null,
            destination3Choice: null,
            destination4Choice: null
        };
    }

    componentWillMount(){
        const { requestPlanetList , requestToken , requestVehicleList } = this.props;
        requestPlanetList();
        requestToken();
        requestVehicleList();
    }

    handleAircraftTally=(aircraftName)=>{
        const { changeSpacePodTally , changeSpaceRocketTally , changeSpaceShuttleTally , changeSpaceShipTally } = this.props; 
        console.log(aircraftName);
        if(aircraftName === "Space pod")
        {
            changeSpacePodTally();
        }
        else if(aircraftName === "Space rocket"){
            changeSpaceRocketTally();
        }
        else if(aircraftName === "Space shuttle"){
            changeSpaceShuttleTally();
        }
        else if(aircraftName === "Space ship"){
            changeSpaceShipTally();
        }
    }

    handleDistance1=(option)=>{
        this.setState({
            distance1: option.distance
        });
    }

    handleDistance2=(option)=>{
        this.setState({
            distance2: option.distance
        });
    }

    handleDistance3=(option)=>{
        this.setState({
            distance3: option.distance
        });
    }

    handleDistance4=(option)=>{
        this.setState({
            distance4: option.distance
        });
    }
    

    handleSubmit=()=>{
        const { token , requestFindFalcone , history } = this.props;
        const planetData = {
            token: token,
            planet_names: [this.state.planet1, this.state.planet2, this.state.planet3, this.state.planet4],
            vehicle_names: [this.state.destination1Choice, this.state.destination2Choice, this.state.destination3Choice, this.state.destination4Choice]
        }
        return new Promise((resolve,reject)=>
      {
        requestFindFalcone(planetData,resolve,reject);
      }).then(
        success=>{
            history.push("/result");
        }
      ).catch(
        fail=>{
          alert(fail);
        }
      )
        
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
                           <MenuItem value={option.name} key={i} onClick={()=> this.handleDistance1(option)}>{option.name}</MenuItem>
                        ))}
                    </Select>
                    <div style={{padding: "36px", height: "170px"}}>
                        {this.state.planet1 && <RadioGroup aria-label="gender" name="gender1" value={this.state.destination1Choice} onChange={(event)=> this.setState({destination1Choice: event.target.value})}>    
                                {vehicleList.map((option,i) => (

                                            this.state.distance1 <= option.max_distance ? 
                                            <FormControlLabel key= {i} value={option.name} control={<Radio onClick={()=> this.handleAircraftTally(option.name)} />} label={option.name} />
                                            :
                                            <FormControlLabel disabled key= {i} value={option.name} control={<Radio />} label={option.name} />
                                ))}
                        </RadioGroup>}    
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
                           <MenuItem value={option.name} onClick={()=> this.handleDistance2(option)} key={i}>{option.name}</MenuItem>
                        ))}
                    </Select> 
                    <div style={{padding: "36px", height: "170px"}}>
                        {this.state.planet2 && <RadioGroup aria-label="gender" name="gender1" value={this.state.destination2Choice} onChange={(event)=> this.setState({destination2Choice: event.target.value})}>
                             {vehicleList.map((option,i) => (
                                 this.state.distance2 <= option.max_distance ? 
                                 <FormControlLabel  key= {i} value={option.name} control={<Radio onClick={()=> this.handleAircraftTally(option.name)} />} label={option.name} />
                                 :
                                 <FormControlLabel disabled key= {i} value={option.name} control={<Radio />} label={option.name} />
                            ))}
                        </RadioGroup>}
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
                           <MenuItem value={option.name} key={i} onClick={()=> this.handleDistance3(option)}>{option.name}</MenuItem>
                        ))}
                    </Select> 
                    <div style={{padding: "36px", height: "170px"}}>
                        {this.state.planet3 && <RadioGroup aria-label="gender" name="gender1" value={this.state.destination3Choice} onChange={(event)=> this.setState({destination3Choice: event.target.value})}>
                            {vehicleList.map((option,i) => (
                                 this.state.distance3 <= option.max_distance ? 
                                 <FormControlLabel  key= {i} value={option.name} control={<Radio onClick={()=> this.handleAircraftTally(option.name)}/>} label={option.name} />
                                 :
                                 <FormControlLabel disabled key= {i} value={option.name} control={<Radio />} label={option.name} />
                            ))}
                        </RadioGroup>}    
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
                           <MenuItem value={option.name} key={i} onClick={()=> this.handleDistance4(option)}>{option.name}</MenuItem>
                        ))}
                    </Select> 
                    <div style={{padding: "36px", height: "170px"}}>
                        {this.state.planet4 && <RadioGroup aria-label="gender" name="gender1" value={this.state.destination4Choice} onChange={(event)=> this.setState({destination4Choice: event.target.value})}>
                             {vehicleList.map((option,i) => (
                                 this.state.distance4 <= option.max_distance ? 
                                 <FormControlLabel  key= {i} value={option.name} control={<Radio onClick={()=> this.handleAircraftTally(option.name)}/>} label={option.name} />
                                 :
                                 <FormControlLabel disabled key= {i} value={option.name} control={<Radio />} label={option.name} />
                             ))}
                        </RadioGroup>}    
                    </div>  
                </div>
                
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={() => { this.handleSubmit()}} style={{width: 250}}>
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
    spaceShipTotal: state.planets.spaceShipTotal,
    token: state.planets.token
  })
  
  const mapDispatchToProps = dispatch => ({
    requestPlanetList: () => dispatch(planetListRequest()),
    requestVehicleList: () => dispatch(vehicleListRequest()),
    changeSpacePodTally: () => dispatch(spacePodTally()),
    changeSpaceRocketTally: () => dispatch(spaceRocketTally()),
    changeSpaceShuttleTally: () => dispatch(spaceShuttleTally()),
    changeSpaceShipTally: () => dispatch(spaceShipTally()),
    requestToken: () => dispatch(getTokenRequest()),
    requestFindFalcone: (planetData, resolve, reject) => dispatch(findFalconeRequest(planetData, resolve, reject))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Main);