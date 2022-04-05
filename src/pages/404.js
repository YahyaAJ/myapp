import React, { Component, Fragment } from 'react'
import '../style/404.css'

class NotFound extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <div class="notFound">
                    <h1 class="nfh1">404</h1>
                    <p>Page Not Found</p>
                </div>
            </Fragment>
        );
    }
}
 
export default NotFound;
