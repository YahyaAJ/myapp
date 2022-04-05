import React, { Component, Fragment} from 'react'
import FormLogin from '../components/FormLogin'
import '../style/login.css'


class Login extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <FormLogin />
            </Fragment>
        );
    }
}
 
export default Login;