import React, { Component, Fragment } from 'react'
import FormRegister from '../components/FormRegister';
import '../style/register.css'

class Register extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <FormRegister />
            </Fragment>
        );
    }
}
 
export default Register;