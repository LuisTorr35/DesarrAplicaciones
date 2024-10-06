import React, { Component } from 'react';

class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <h1>Contador: {this.state.count}</h1>
                <button onClick={this.incrementCount}>Incrementar</button>
            </div>
        );
    }
}

export default Contador;
