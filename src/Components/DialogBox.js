import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    borderTop: '8px solid #FF9800',
    width: '90%',
    maxWidth: 'none',
    borderRadius: '3px 3px 0px 0px'
}

class DialogBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            dialogOpen: false
        }
    }
    handleOpen = () => {
        this.setState({dialogOpen: true});
    }
    handleClose = () => {
        this.setState({dialogOpen: false});
    }
    render(){
        const dialogActions = [
            <FlatButton
                label="Cancel"
                onClick={this.handleClose}
            />,
            <FlatButton
                label="More"
                primary={true}
                href="https://www.medicalnewstoday.com/articles/323622.php"
            />
        ];
        return(
            <div>
                <RaisedButton
                    label="Need help ?"
                    onClick={this.handleOpen}
                    backgroundColor={this.props.btnBGColor}
                    fullWidth={true}
                />
                <Dialog
                    open={this.state.dialogOpen}
                    actions={dialogActions}
                    contentStyle={styles}
                    model={true}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <h1 className="dialog-h1">Body Mass Index (BMI) for Adults</h1>
                    <p className="dialog-p">A BMI of 18.5 to 24.9 (green) is considered healthy. A BMI of 25 to 29.9 (yellow) is considered overweight. A BMI of 30 or higher (red) is considered obese. A person who has a large change in BMI, even if he or she is not overweight or underweight, should be evaluated to find the cause.A BMI of 18.5 to 24.9 (green) is considered healthy. A BMI of 25 to 29.9 (yellow) is considered overweight. A BMI of 30 or higher (red) is considered obese. A person who has a large change in BMI, even if he or she is not overweight or underweight, should be evaluated to find the cause.A BMI of 18.5 to 24.9 (green) is considered healthy. A BMI of 25 to 29.9 (yellow) is considered overweight. A BMI of 30 or higher (red) is considered obese. A person who has a large change in BMI, even if he or she is not overweight or underweight, should be evaluated to find the cause.</p>
                </Dialog>
            </div>
        );
    }

}

export default DialogBox;