import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Image, SelectTitle, ParentDiv } from '../styles/Main'; 
import '../App.css';
import falcon from "../Assets/falcon.jpg";

class Main extends Component{
    render(){
       const { searchResult } = this.props;
       const { data } =this.props.location;
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
                    The Falcon is wiser than the king thinks
                </SelectTitle>
            )}
            <div style={{marginTop: "5%", marginBottom: "10%"}}>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <Button variant="contained" color="secondary" style={{width: 250}}>
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