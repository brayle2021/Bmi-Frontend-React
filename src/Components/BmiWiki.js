import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const BmiWiki = (props) => {
    const DialogActions = [
        <FlatButton 
            label="Cancel"
            onClick={props.close}
        />,
        <FlatButton 
            label="More on Wiki"
            primary={true}
            onClick={props.close}
            href="https://en.wikipedia.org/wiki/Body_mass_index"
        />
    ];
    return(
        <div>
            <Dialog 
                open={props.open}
                actions={DialogActions}
                onRequestClose={props.close}
                model={true}
                autoScrollBodyContent={true}                    
            >
                <h1>Body Mass Index (BMI)</h1>
                <p>The body mass index or Quetelet index is a value derived from the mass and height of an individual. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m², resulting from mass in kilograms and height in metres. Wikipedia</p>
            </Dialog>
        </div>
    );
}


export default BmiWiki;