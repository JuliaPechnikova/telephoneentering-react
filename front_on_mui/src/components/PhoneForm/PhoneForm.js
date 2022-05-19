import React from 'react';
import Selector from '../Selector/Selector';
import Input from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './PhoneForm.css';
import {connect} from 'react-redux';
import {createNumber} from '../../redux/actions';

class PhoneForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      phoneNumber: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const {phoneNumber} = this.state;

    const regex = /^[0-9]{3,10}$/;

    if (!regex.test(phoneNumber)) {
      return 
    }

    const newPhoneNumb = {
      phoneNumber, id: Date.now().toString()
    }

    this.props.createNumber(newPhoneNumb);
    this.setState({phoneNumber: ''});
  }

  handleInputChange = e => {
    e.persist()
    this.setState(prev => ({...prev, ...{
      [e.target.name]: e.target.value
    }}))
  }

  render(){
    const ariaLabel = { 'aria-label': 'description' };

    return (
      <form className="phoneform" onSubmit={this.handleSubmit}>
        <Selector/>
        {/* https://mui.com/material-ui/react-text-field/ */}
        <Input id="phoneNumber" name="phoneNumber" onChange={this.handleInputChange} value={this.state.phoneNumber} color="primary" placeholder="От 3 до 10 цифр" inputProps={ariaLabel} />
        {/* <Input defaultValue="Error" error inputProps={ariaLabel} /> */}
        <Button variant="outlined" type="submit">Создать</Button>
      </form>
    )
  } 
}


const mapDispatchToProps = {
  createNumber
}

export default connect(null, mapDispatchToProps)(PhoneForm);
