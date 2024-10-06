import React, { Component } from 'react';

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cont: 0
    };
  }

  aumento = () => {
    this.setState({ cont: this.state.cont + 1 });
  }

  disminuyo = () => {
    if (this.state.cont > 0) {
        this.setState({ cont: this.state.cont - 1 });
    }
}

  render() {
    return (
      <div className="counter-container">
        <h2>Contador con Clases</h2>
        <p>Valor actual: {this.state.cont}</p>
        <button onClick={this.aumento} className="btn btn-success">Incrementar</button>
        <button onClick={this.disminuyo} className="btn btn-danger">Disminuir</button>
      </div>
    );
  }
}

export default Contador;
