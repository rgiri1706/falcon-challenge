import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import './Radiobutton.css';

const RadioButton = ({ 
    vehicleList,
    handleChange,
    id,
    selectedPlanetsData,
    ...rest
    }) => {
    return (
        <>
            <div className="Radio-Button-Alignment">
                <RadioGroup onChange={handleChange}>    
                  {vehicleList.map((option,i) => (
                    (selectedPlanetsData && selectedPlanetsData.distance <= option.max_distance ) && option.total_no!==0 ? 
                    <FormControlLabel root={{background: "white"}} key= {i} value={option.name} control={<Radio  />} label={option.name+'  ('+option.total_no+ ')'} /> 
                    : 
                    <FormControlLabel disabled root={{background: "white"}} key= {i} value={option.name} control={<Radio  />} label={option.name+'  ('+option.total_no+ ')'} />
                   ))}
                </RadioGroup> 
            </div> 
        </>
    )
}

export default RadioButton;