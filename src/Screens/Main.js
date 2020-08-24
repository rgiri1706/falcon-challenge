import React, { Component } from 'react';
import { connect } from 'react-redux';
import { planetListRequest } from '../store/actions/planets.js';
import { vehicleListRequest , totalTimeInitial } from '../store/actions/vehicle.js';
import { getTokenRequest } from '../store/actions/token.js';
import './Main.css';
import { Image, ParentDiv } from '../styles/Main'; 
import falcon from "../Assets/falcon.jpg";
import MainContent from './MainContent.js';

class Main extends Component{

    componentWillMount(){
        const { requestPlanetList , requestToken , requestVehicleList , requestTotalTimeInitial } = this.props;
        requestTotalTimeInitial();
        requestPlanetList();
        requestToken();
        requestVehicleList();
    }

    render(){
       const { history } = this.props; 
       return (
        <ParentDiv>
            <div>
                <Image src={falcon} alt="Bird"/>
            </div>
            <MainContent history={history}/>
        </ParentDiv>
       );
    }
}

const mapStateToProps = state => ({
  })
  
  const mapDispatchToProps = dispatch => ({
    requestPlanetList: () => dispatch(planetListRequest()),
    requestVehicleList: () => dispatch(vehicleListRequest()),
    requestTotalTimeInitial: () => dispatch(totalTimeInitial()),
    requestToken: () => dispatch(getTokenRequest())
  })

export default connect(mapStateToProps, mapDispatchToProps)(Main);