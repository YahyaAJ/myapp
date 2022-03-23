import React, {Component} from 'react'

export default class State extends Component {

    constructor() {
        super();
        this.state = {
            name : 'Naruto',
            ability : 'Rasengan',
        }
    }
    render() {
        return (
            <div>
                <h1>I'am {this.name}, i can do {this.ability} </h1>
            </div>
        );
    }
}

