import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { vehicleCountUpdate , totalTimeUpdate } from '../store/actions/vehicle.js';
import { findFalconeRequest } from '../store/actions/find.js';
import './Main.css';
import { SelectTitle , activeButton , disabledButton } from '../styles/Main'; 
import { dropdownCount } from '../utils/constants';
import DropDown from '../Components/Dropdown/Dropdown.js';
import RadioButton from '../Components/RadioButton/RadioButton.js';

class MainContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedPlanets:new Array(dropdownCount),
            selectedPlanetNames: new Array(dropdownCount),
            selectedVehicleNames: new Array(dropdownCount)
        };
    }

    storePlanetName=(event, index)=>{
        const newItems = [...this.state.selectedPlanetNames];
        newItems[index] = event.target.value;
        this.setState({ selectedPlanetNames: newItems });
    }

    storePlanetData=(option, index)=>{
        const newItems = [...this.state.selectedPlanets];
        newItems[index] = option;
        this.setState({ selectedPlanets: newItems });
    }

    storeVehicleName=(event, index)=>{
        const { requestVehicleCountUpdate , requestTotalTimeUpdate } =this.props;
        requestVehicleCountUpdate(this.state.selectedVehicleNames[index], event.target.value);
        requestTotalTimeUpdate(this.state.selectedVehicleNames[index], event.target.value, this.state.selectedPlanets[index]);
        const newItems = [...this.state.selectedVehicleNames];
        newItems[index] = event.target.value;
        this.setState({ selectedVehicleNames: newItems });
    }

    handleSubmit=()=>{
        
        const { token , requestFindFalcone , history , totalTime } = this.props;
        const planetData = {
            token: token,
            planet_names: this.state.selectedPlanetNames,
            vehicle_names: this.state.selectedVehicleNames
        }
        return new Promise((resolve,reject)=>
        {
            requestFindFalcone(planetData,resolve,reject);
        }).then(
        success=>{
            history.push({
                pathname: '/result',
                data: totalTime
            });
        }
        ).catch(
            fail=>{
            alert(fail);
            }
        )
    }
    render(){
       const { vehicleList , planetList , totalTime } = this.props;
       const dropDownArray = new Array(dropdownCount).fill(0,0,dropdownCount);
       return (
        <div>
            <SelectTitle>
                Select planets you want to search in : 
            </SelectTitle>
            <div className="Dropdown-Boxes">
            <Grid container spacing={1}>
                {dropDownArray.map((value, index) =>
                    <Grid container item lg={3} sm={6} xs={12} spacing={3} id={"Grid"+index}>
                        <div className="Area">
                            <DropDown
                            planetList={planetList}
                            id={index}
                            currentPlanet={this.state.selectedPlanetNames[index]}
                            handleChange={(event)=> this.storePlanetName(event,index)}
                            storePlanet={(option)=> this.storePlanetData(option, index)}
                            selectedPlanets={this.state.selectedPlanetNames}
                            /> 
                            <RadioButton
                            vehicleList={vehicleList}
                            handleChange={(event)=> this.storeVehicleName(event,index)}
                            id={index}
                            selectedPlanetsData={this.state.selectedPlanets[index]}
                            />   
                        </div>
                    </Grid>
                )}
            </Grid>
            </div>
            <div className="Total-Time">
                <SelectTitle>
                    Total Time :{totalTime}                   
                </SelectTitle>
            </div>
            <div>
                {!this.state.selectedVehicleNames.includes(undefined) ? 
                <Button variant="contained"  color="secondary" onClick={() => { this.handleSubmit()}} style={activeButton}>
                    Find Falcon !
                </Button>
                :
                <Button variant="contained"  disabled color="secondary" onClick={() => { this.handleSubmit()}} style={disabledButton}>
                    Find Falcon !
                </Button>
                }
            </div>
        </div>
       );
    }
}

const mapStateToProps = state => ({
    planetList: state.planets.planetList,
    vehicleList: state.planets.vehicleList,
    token: state.planets.token,
    totalTime: state.planets.totalTime
  })
  
  const mapDispatchToProps = dispatch => ({
    requestTotalTimeUpdate: (prevData, newData, selectedPlanet) => dispatch(totalTimeUpdate(prevData, newData, selectedPlanet)),
    requestVehicleCountUpdate: (prevData, newData) => dispatch(vehicleCountUpdate(prevData, newData)),
    requestFindFalcone: (planetData, resolve, reject) => dispatch(findFalconeRequest(planetData, resolve, reject))
  })

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);