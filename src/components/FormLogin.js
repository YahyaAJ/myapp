import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import "../style/login.css"

class FormLogin extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <div class="login">
                    <h2 class="flh2">ReactJS</h2>
                    <form>
                        <input type="email" name="email" placeholder="Email or Phone Number"/>
                        <br /><br />
                        <input type="password" name="password" placeholder="Password" />
                        <br /><br /><hr /><br />
                        <Link to="/register" class="notHaveAccount">Not have account yet?</Link>
                        <br /><br />
                        <input type="submit" class="daftar" value="Login"/>
                    </form>
                    
                </div>
            </Fragment>
        );
    }
}
 
export default FormLogin;
<Fragment>

</Fragment>