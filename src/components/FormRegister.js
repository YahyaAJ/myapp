import React, { Component, Fragment } from 'react';
import "../style/register.css"

class FormRegister extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <div class="signup">
                    <div class="border">
                        <h2 class="frh2">ReactJS</h2>
                        <form>
                            <input type="text" class="nama" name="username" placeholder='First Name'/>
                            <input type="text" class="nama" name="username" placeholder='Last Name'/>
                            <br /><br />
                            <input type="email" name="email" placeholder="Email or Phone Number"/>
                            <br /><br />
                            <input type="password" name="password" placeholder="Password" />
                            <br /><br /><hr /><br />
                            <input type="submit" class="daftar" value="Sign Up"/>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default FormRegister;
