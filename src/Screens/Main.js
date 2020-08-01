import React, { Component } from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import { Grid } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import { planetListRequest , vehicleListRequest , spacePodTally , spaceRocketTally , spaceShuttleTally, spaceShipTally , getTokenRequest , findFalconeRequest , spacePodIncrease, spaceRocketIncrease, spaceShuttleIncrease, spaceShipIncrease } from '../store/actions/planets.js';
import '../App.css';
import falcon from "../Assets/falcon.jpg";

const Image = styled.img`
    border-radius: 50%;
    width: 205px;
    margin-top: 5%;
    height: 205px;
    border: 2px solid ;
`;

const SelectTitle = styled.div`
    font-size: 37px;
    padding-top: 2%; 
    width: 100%;
    font-family: 'Titillium Web', sans-serif;
`;

const Title = styled.div`
    font-size: 20px;
    padding-bottom: 2%;
    width: 100%;
    font-family: 'Titillium Web', sans-serif;
`;

const ParentDiv = styled.div`
    width: 100%;
    position: absolute;
    top: 82px;
    color: white;
    background-color: #282c34;
    min-height: 100vh;
`;

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            planet1:'',
            planet2:'',
            planet3:'',
            planet4:'',
            totalTime: 0,
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

    handleAircraftTally=(aircraftName, option, dropdown, distance )=>{
        console.log(option);
        const { changeSpacePodTally , changeSpaceRocketTally , changeSpaceShuttleTally , changeSpaceShipTally , increaseSpaceRocketTally, increaseSpacePodTally, increaseSpaceShuttleTally, increaseSpaceShipTally , spacePodSpeed, spaceRocketSpeed, spaceShuttleSpeed, spaceShipSpeed } = this.props;
        if(aircraftName === "Space pod" )
        {
            if((dropdown === "1" && this.state.destination1Choice !== "Space pod") || (dropdown === "2" && this.state.destination2Choice !== "Space pod") || (dropdown === "3" && this.state.destination3Choice !== "Space pod") || (dropdown === "4" && this.state.destination4Choice !== "Space pod")) {
                if(dropdown === "1")
                {
                    if(this.state.destination1Choice === "Space rocket")
                    {
                        increaseSpaceRocketTally();
                        this.handleTotalTime(spaceRocketSpeed , "decrease", distance);
                    } else if(this.state.destination1Choice === "Space shuttle")
                    {
                        increaseSpaceShuttleTally();
                        this.handleTotalTime(spaceShuttleSpeed , "decrease", distance);
                    } else if(this.state.destination1Choice === "Space ship")
                    {
                        increaseSpaceShipTally();
                        this.handleTotalTime( spaceShipSpeed, "decrease", distance);
                    }
                } else if(dropdown === "2")
                {
                    if(this.state.destination2Choice === "Space rocket")
                    {
                        increaseSpaceRocketTally();
                        this.handleTotalTime(spaceRocketSpeed , "decrease", distance);
                    } else if(this.state.destination2Choice === "Space shuttle")
                    {
                        increaseSpaceShuttleTally();
                        this.handleTotalTime(spaceShuttleSpeed , "decrease", distance);
                    } else if(this.state.destination2Choice === "Space ship")
                    {
                        increaseSpaceShipTally();
                        this.handleTotalTime(spaceShipSpeed , "decrease", distance);
                    }
                } else if(dropdown === "3")
                {
                    if(this.state.destination3Choice === "Space rocket")
                    {
                        increaseSpaceRocketTally();
                        this.handleTotalTime(spaceRocketSpeed , "decrease", distance);
                    } else if(this.state.destination3Choice === "Space shuttle")
                    {
                        increaseSpaceShuttleTally();
                        this.handleTotalTime(spaceShuttleSpeed , "decrease", distance);
                    } else if(this.state.destination3Choice === "Space ship")
                    {
                        increaseSpaceShipTally();
                        this.handleTotalTime(spaceShipSpeed , "decrease", distance);
                    }
                } else if(dropdown === "4")
                {
                    if(this.state.destination4Choice === "Space rocket")
                    {
                        increaseSpaceRocketTally();
                        this.handleTotalTime(spaceRocketSpeed , "decrease", distance);
                    } else if(this.state.destination4Choice === "Space shuttle")
                    {
                        increaseSpaceShuttleTally();
                        this.handleTotalTime(spaceShuttleSpeed , "decrease", distance);
                    } else if(this.state.destination4Choice === "Space ship")
                    {
                        increaseSpaceShipTally();
                        this.handleTotalTime(spaceShipSpeed , "decrease", distance);
                    }
                }
                changeSpacePodTally();
                this.handleTotalTime(option.speed, "increase", distance);
            }
        }
        else if(aircraftName === "Space rocket"){
            if((dropdown === "1" && this.state.destination1Choice !== "Space rocket") || (dropdown === "2" && this.state.destination2Choice !== "Space rocket") || (dropdown === "3" && this.state.destination3Choice !== "Space rocket") || (dropdown === "4" && this.state.destination4Choice !== "Space rocket")) {
                if(dropdown === "1")
                {
                    if(this.state.destination1Choice === "Space pod")
                    {
                        increaseSpacePodTally();
                        this.handleTotalTime(spacePodSpeed , "decrease", distance);
                    } else if(this.state.destination1Choice === "Space shuttle")
                    {
                        increaseSpaceShuttleTally();
                        this.handleTotalTime(spaceShuttleSpeed , "decrease", distance);
                    } else if(this.state.destination1Choice === "Space ship")
                    {
                        increaseSpaceShipTally();
                        this.handleTotalTime(spaceShipSpeed , "decrease", distance);
                    }
                } else if(dropdown === "2")
                {
                    if(this.state.destination2Choice === "Space pod")
                    {
                        increaseSpacePodTally();
                        this.handleTotalTime(spacePodSpeed , "decrease", distance);
                    } else if(this.state.destination2Choice === "Space shuttle")
                    {
                        increaseSpaceShuttleTally();
                        this.handleTotalTime(spaceShuttleSpeed , "decrease", distance);
                    } else if(this.state.destination2Choice === "Space ship")
                    {
                        increaseSpaceShipTally();
                        this.handleTotalTime(spaceShipSpeed , "decrease", distance);
                    }
                } else if(dropdown === "3")
                {
                    if(this.state.destination3Choice === "Space pod")
                    {
                        increaseSpacePodTally();
                        this.handleTotalTime(spacePodSpeed , "decrease", distance);
                    } else if(this.state.destination3Choice === "Space shuttle")
                    {
                        increaseSpaceShuttleTally();
                        this.handleTotalTime(spaceShuttleSpeed , "decrease", distance);
                    } else if(this.state.destination3Choice === "Space ship")
                    {
                        increaseSpaceShipTally();
                        this.handleTotalTime(spaceShipSpeed , "decrease", distance);
                    }
                } else if(dropdown === "4")
                {
                    if(this.state.destination4Choice === "Space pod")
                    {
                        increaseSpacePodTally();
                        this.handleTotalTime(spacePodSpeed , "decrease", distance);
                    } else if(this.state.destination4Choice === "Space shuttle")
                    {
                        increaseSpaceShuttleTally();
                        this.handleTotalTime(spaceShuttleSpeed , "decrease", distance);
                    } else if(this.state.destination4Choice === "Space ship")
                    {
                        increaseSpaceShipTally();
                        this.handleTotalTime(spaceShipSpeed , "decrease", distance);
                    }
                }
            changeSpaceRocketTally();
            this.handleTotalTime(spaceRocketSpeed , "increase", distance);
            }
        }
        else if(aircraftName === "Space shuttle"){
            if((dropdown === "1" && this.state.destination1Choice !== "Space shuttle") || (dropdown === "2" && this.state.destination2Choice !== "Space shuttle") || (dropdown === "3" && this.state.destination3Choice !== "Space shuttle") || (dropdown === "4" && this.state.destination4Choice !== "Space shuttle")) {
                if(dropdown === "1")
                {
                    if(this.state.destination1Choice === "Space pod")
                    {
                        increaseSpacePodTally();
                        this.handleTotalTime(spacePodSpeed , "decrease", distance);
                    } else if(this.state.destination1Choice === "Space rocket")
                    {
                        increaseSpaceRocketTally();
                        this.handleTotalTime(spaceRocketSpeed , "decrease", distance);
                    } else if(this.state.destination1Choice === "Space ship")
                    {
                        increaseSpaceShipTally();
                        this.handleTotalTime(spaceShipSpeed , "decrease", distance);
                    }
                } else if(dropdown === "2")
                {
                    if(this.state.destination2Choice === "Space rocket")
                    {
                        increaseSpaceRocketTally();
                        this.handleTotalTime(spaceRocketSpeed , "decrease", distance);
                    } else if(this.state.destination2Choice === "Space pod")
                    {
                        increaseSpacePodTally();
                        this.handleTotalTime(spacePodSpeed , "decrease", distance);
                    } else if(this.state.destination2Choice === "Space ship")
                    {
                        increaseSpaceShipTally();
                        this.handleTotalTime(spaceShipSpeed , "decrease", distance);
                    }
                } else if(dropdown === "3")
                {
                    if(this.state.destination3Choice === "Space rocket")
                    {
                        increaseSpaceRocketTally();
                        this.handleTotalTime(spaceRocketSpeed , "decrease", distance);
                    } else if(this.state.destination3Choice === "Space pod")
                    {
                        increaseSpacePodTally();
                        this.handleTotalTime(spacePodSpeed , "decrease", distance);
                    } else if(this.state.destination3Choice === "Space ship")
                    {
                        increaseSpaceShipTally();
                        this.handleTotalTime(spaceShipSpeed , "decrease", distance);
                    }
                } else if(dropdown === "4")
                {
                    if(this.state.destination4Choice === "Space rocket")
                    {
                        increaseSpaceRocketTally();
                        this.handleTotalTime(spaceRocketSpeed , "decrease", distance);
                    } else if(this.state.destination4Choice === "Space pod")
                    {
                        increaseSpacePodTally();
                        this.handleTotalTime(spacePodSpeed , "decrease", distance);
                    } else if(this.state.destination4Choice === "Space ship")
                    {
                        increaseSpaceShipTally();
                        this.handleTotalTime(spaceShipSpeed , "decrease", distance);
                    }
                }
            changeSpaceShuttleTally();
            this.handleTotalTime(spaceShuttleSpeed , "increase", distance);
            }
        }
        else if(aircraftName === "Space ship"){
            if((dropdown === "1" && this.state.destination1Choice !== "Space ship") || (dropdown === "2" && this.state.destination2Choice !== "Space ship") || (dropdown === "3" && this.state.destination3Choice !== "Space ship") || (dropdown === "4" && this.state.destination4Choice !== "Space ship")) {
                if(dropdown === "1")
                {
                    if(this.state.destination1Choice === "Space rocket")
                    {
                        increaseSpaceRocketTally();
                        this.handleTotalTime(spaceRocketSpeed , "decrease", distance);
                    } else if(this.state.destination1Choice === "Space shuttle")
                    {
                        increaseSpaceShuttleTally();
                        this.handleTotalTime(spaceShuttleSpeed , "decrease", distance);
                    } else if(this.state.destination1Choice === "Space pod")
                    {
                        increaseSpacePodTally();
                        this.handleTotalTime(spacePodSpeed , "decrease", distance);
                    }
                } else if(dropdown === "2")
                {
                    if(this.state.destination2Choice === "Space rocket")
                    {
                        increaseSpaceRocketTally();
                        this.handleTotalTime(spaceRocketSpeed , "decrease", distance);
                    } else if(this.state.destination2Choice === "Space shuttle")
                    {
                        increaseSpaceShuttleTally();
                        this.handleTotalTime(spaceShuttleSpeed , "decrease", distance);
                    } else if(this.state.destination2Choice === "Space pod")
                    {
                        increaseSpacePodTally();
                        this.handleTotalTime(spacePodSpeed , "decrease", distance);
                    }
                } else if(dropdown === "3")
                {
                    if(this.state.destination3Choice === "Space rocket")
                    {
                        increaseSpaceRocketTally();
                        this.handleTotalTime(spaceRocketSpeed , "decrease", distance);
                    } else if(this.state.destination3Choice === "Space shuttle")
                    {
                        increaseSpaceShuttleTally();
                        this.handleTotalTime(spaceShuttleSpeed , "decrease", distance);
                    } else if(this.state.destination3Choice === "Space pod")
                    {
                        increaseSpacePodTally();
                        this.handleTotalTime(spacePodSpeed , "decrease", distance);
                    }
                } else if(dropdown === "4")
                {
                    if(this.state.destination4Choice === "Space rocket")
                    {
                        increaseSpaceRocketTally();
                        this.handleTotalTime(spaceRocketSpeed , "decrease", distance);
                    } else if(this.state.destination4Choice === "Space shuttle")
                    {
                        increaseSpaceShuttleTally();
                        this.handleTotalTime(spaceShuttleSpeed , "decrease", distance);
                    } else if(this.state.destination4Choice === "Space pod")
                    {
                        increaseSpacePodTally();
                        this.handleTotalTime(spacePodSpeed , "decrease", distance);
                    }
                }    
            changeSpaceShipTally();
            this.handleTotalTime(spaceShipSpeed , "increase", distance);
            }
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
    
    handleTotalTime=(speed, operation, distance) => {
        let time, count ;
        if(operation === "increase") {
             time = distance / speed;
             count = this.state.totalTime + time;
             console.log(time);
             console.log(this.state.totalTime);
             console.log(count);
             this.setState({
                totalTime: count
            });
        }
        else if(operation === "decrease") {
            time = distance / speed;
            count = this.state.totalTime - time;
            console.log(count);
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.totalTime = count;
        }
        
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
            history.push({
                pathname: '/result',
                data: this.state.totalTime 
            });
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
            <div>
                <Image src={falcon} alt="Bird"/>
            </div>
            <SelectTitle>
                Select planets you want to search in : 
            </SelectTitle>
            <div className="Dropdown-Boxes">
            <Grid container spacing={1}>
                <Grid container item lg={3} sm={6} xs={12} spacing={3}>
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
                                                this.state.distance1 <= option.max_distance && arr[i]>0 ? 
                                                <FormControlLabel root={{background: "white"}} key= {i} value={option.name} control={<Radio onClick={()=> this.handleAircraftTally(option.name, option, "1", this.state.distance1)} />} label={option.name+'  ('+arr[i]+ ')'} />
                                                :
                                                <FormControlLabel disabled key= {i} value={option.name} control={<Radio />} label={option.name+'  ('+arr[i]+ ')'} />
                                    ))}
                            </RadioGroup>}    
                        </div>   
                    </div>
                </Grid>
                <Grid container item lg={3} sm={6} xs={12} spacing={3}>
                    <div className="Area">
                        <div style={{padding: "16px"}}>
                            Destination 2
                        </div>
                        {this.state.destination1Choice ? <Select
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
                        :
                        <Select
                        disableUnderline
                        id="demo-simple-select"
                        disabled
                        className="Select-Style"
                        value={this.state.planet2}
                        onChange={(event)=> this.setState({planet2: event.target.value})}
                        >
                            {planetList.map((option,i) => (
                            <MenuItem value={option.name} onClick={()=> this.handleDistance2(option)} key={i}>{option.name}</MenuItem>
                            ))}
                        </Select>}
                        <div style={{padding: "36px", height: "170px"}}>
                            {this.state.planet2 && <RadioGroup aria-label="gender" name="gender1" value={this.state.destination2Choice} onChange={(event)=> this.setState({destination2Choice: event.target.value})}>
                                {vehicleList.map((option,i) => (
                                    this.state.distance2 <= option.max_distance && arr[i]>0 ? 
                                    <FormControlLabel  key= {i} value={option.name} control={<Radio onClick={()=> this.handleAircraftTally(option.name, option, "2", this.state.distance2)} />} label={option.name+'  ('+arr[i]+ ')'} />
                                    :
                                    <FormControlLabel disabled key= {i} value={option.name} control={<Radio />} label={option.name+'  ('+arr[i]+ ')'} />
                                ))}
                            </RadioGroup>}
                        </div>  
                    </div>
                </Grid>
                <Grid container item lg={3} sm={6} xs={12} spacing={3}>
                    <div className="Area">
                        <div style={{padding: "16px"}}>
                            Destination 3
                        </div>
                        {this.state.destination1Choice && this.state.destination2Choice ? <Select
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
                        :
                        <Select
                        disableUnderline
                        id="demo-simple-select"
                        className="Select-Style"
                        disabled
                        value={this.state.planet3}
                        onChange={(event)=> this.setState({planet3: event.target.value})}
                        >
                            {planetList.map((option,i) => (
                            <MenuItem value={option.name} key={i} onClick={()=> this.handleDistance3(option)}>{option.name}</MenuItem>
                            ))}
                        </Select>}
                        <div style={{padding: "36px", height: "170px"}}>
                            {this.state.planet3 && <RadioGroup aria-label="gender" name="gender1" value={this.state.destination3Choice} onChange={(event)=> this.setState({destination3Choice: event.target.value})}>
                                {vehicleList.map((option,i) => (
                                    this.state.distance3 <= option.max_distance && arr[i]>0 ? 
                                    <FormControlLabel  key= {i} value={option.name} control={<Radio onClick={()=> this.handleAircraftTally(option.name, option, "3", this.state.distance3)}/>} label={option.name+'  ('+arr[i]+ ')'} />
                                    :
                                    <FormControlLabel disabled key= {i} value={option.name} control={<Radio />} label={option.name+'  ('+arr[i]+ ')'} />
                                ))}
                            </RadioGroup>}    
                        </div>  
                    </div>
                </Grid>
                <Grid container item lg={3} sm={6} xs={12} spacing={3}>
                    <div className="Area">
                        <div style={{padding: "16px"}}>
                            Destination 4
                        </div>
                        {this.state.destination3Choice ? <Select
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
                        :
                        <Select
                        disableUnderline
                        id="demo-simple-select"
                        className="Select-Style"
                        disabled
                        value={this.state.planet4}
                        onChange={(event)=> this.setState({planet4: event.target.value})}
                        >
                            {planetList.map((option,i) => (
                            <MenuItem value={option.name} key={i} onClick={()=> this.handleDistance4(option)}>{option.name}</MenuItem>
                            ))}
                        </Select>} 
                        <div style={{padding: "36px", height: "170px"}}>
                            {this.state.planet4 && <RadioGroup aria-label="gender" name="gender1" value={this.state.destination4Choice} onChange={(event)=> this.setState({destination4Choice: event.target.value})}>
                                {vehicleList.map((option,i) => (
                                    this.state.distance4 <= option.max_distance && arr[i]>0 ? 
                                    <FormControlLabel  key= {i} value={option.name} control={<Radio onClick={()=> this.handleAircraftTally(option.name, option, "4", this.state.distance4)}/>} label={option.name+'  ('+arr[i]+ ')'} />
                                    :
                                    <FormControlLabel disabled key= {i} value={option.name} control={<Radio />} label={option.name+'  ('+arr[i]+ ')'} />
                                ))}
                            </RadioGroup>}    
                        </div>  
                    </div>
                </Grid>
            </Grid>
            
            </div>
            <div style={{position : " relative",  bottom : "10vh" }}>
                <SelectTitle>
                    Total Time :{this.state.totalTime}                   
                </SelectTitle>
            </div>
            <div>
                {this.state.destination1Choice !== null && this.state.destination2Choice !== null && this.state.destination3Choice !== null && this.state.destination4Choice !== null ? <Button variant="contained"  color="secondary" onClick={() => { this.handleSubmit()}} style={{width: 250, position: "relative", bottom: "25px"}}>
                    Find Falcon !
                </Button>
                :
                <Button variant="contained"  disabled color="secondary" onClick={() => { this.handleSubmit()}} style={{width: 250, position: "relative", bottom: "25px", border: "1px solid grey", color: "grey"}}>
                    Find Falcon !
                </Button>
                }
            </div> 
            <AppBar position="static">
                <Title>
                    © 2020 geektrust.in. All rights reserved.
                </Title>
            </AppBar>
            
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
    spacePodSpeed: state.planets.spacePodSpeed,
    spaceRocketSpeed: state.planets.spaceRocketSpeed,
    spaceShuttleSpeed: state.planets.spaceShuttleSpeed,
    spaceShipSpeed: state.planets.spaceShipSpeed,
    token: state.planets.token
  })
  
  const mapDispatchToProps = dispatch => ({
    requestPlanetList: () => dispatch(planetListRequest()),
    requestVehicleList: () => dispatch(vehicleListRequest()),
    changeSpacePodTally: () => dispatch(spacePodTally()),
    changeSpaceRocketTally: () => dispatch(spaceRocketTally()),
    changeSpaceShuttleTally: () => dispatch(spaceShuttleTally()),
    changeSpaceShipTally: () => dispatch(spaceShipTally()),
    increaseSpacePodTally: () => dispatch(spacePodIncrease()),
    increaseSpaceRocketTally: () => dispatch(spaceRocketIncrease()),
    increaseSpaceShuttleTally: () => dispatch(spaceShuttleIncrease()),
    increaseSpaceShipTally: () => dispatch(spaceShipIncrease()),
    requestToken: () => dispatch(getTokenRequest()),
    requestFindFalcone: (planetData, resolve, reject) => dispatch(findFalconeRequest(planetData, resolve, reject))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Main);