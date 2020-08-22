import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import './Dropdown.css';


const DropDown = ({ planetList, handleChange, selectedPlanets,  storePlanet, currentPlanet, id, ...rest}) => {
    return (
        <>
            <div className="pd-16">
                Destination {id+1}
            </div>
            <Select
             disableUnderline
             id="demo-simple-select"
             className="Select-Style"
             value={currentPlanet}
             onChange={handleChange}
            >   
              {planetList.map((option,i) => (
                selectedPlanets.indexOf(option.name) !== -1 ?  
                <MenuItem  disabled value={option.name} key={i}>{option.name}</MenuItem>
                :
                <MenuItem  value={option.name} key={i} onClick={()=> storePlanet(option)}>{option.name}</MenuItem>
               ))}
            </Select>
        </>
    )
}

export default DropDown;