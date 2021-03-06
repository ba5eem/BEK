import React, {Component} from 'react';
import PopPop from 'react-poppop';
import Formsy from 'formsy-react';
import MyInput from './MyInput';
import SelectMonth from './SelectMonth';
import SelectDay from './SelectDay';
import SelectStart from './SelectStart';
import SelectEnd from './SelectEnd';
//import ShiftLength from './ShiftLength';

export default class Custom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }

  }

  toggleShow = show => {
    this.setState({show});
  }
   changeValue(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    const {show} = this.state;

    return (
      <div>
        <button id="custom-button" onClick={() => this.toggleShow(true)}>CUSTOM</button>
        <PopPop position="centerCenter"
                open={show}
                closeBtn={true}
                closeOnEsc={true}
                onClose={() => this.toggleShow(false)}
                contentStyle={{overflow: "hidden"}}
                closeOnOverlay={true}>
          <Formsy onSubmit={this.props.submit}>
          <h1>_Custom</h1>
            <MyInput
              name="title"
              validations="isWords"
              validationError="Please enter a title"
              required
            />
            <MyInput
              name="summary"
              validations="isWords"
              validationError="This a required field"
              required
            />
            <MyInput
              name="role"
              validations="isWords"
              validationError="This a required field"
              required
            />
            <SelectMonth
              name="month"
              required
              />
            <SelectDay
              name="day"
              required
              />
            <SelectStart
              name="start"
              required
              />
            <SelectEnd
              name="end"
              />
            <button style={select} type="submit">Submit</button>
            <br></br>
            <h3 style={close}>{!this.props.canSubmit ? "PLEASE COMPLETE ALL FIELDS": "CLICK 'X' WHEN YOU ARE DONE"}</h3>
          </Formsy>

        </PopPop>

      </div>
    )
  }
}

const select = {
  width: "400px",
  textAlign:"center",
  backgroundColor: "#66b3ff",
  fontSize:"25px",
  color: "white"
}
const close ={
  textAlign: "center"
}