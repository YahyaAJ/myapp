import React, { Component, Fragment } from 'react';
import DashBoard from '../components/Dashboard';
import "../style/dashboard.css"
// import { Header } from '../components'

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <DashBoard />
            </Fragment>
        );
    }
}
 
export default Home;