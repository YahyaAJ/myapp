import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login, NotFound, Register } from '../pages'
import Header from '../components/Header'

class Routers extends Component {
    state = {  } 
    render() { 
        return (
            <Router>
                <Header />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Router>
        );
    }
}
 
export default Routers;
