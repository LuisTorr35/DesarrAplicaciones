import React, { Component } from "react";
//No podemos crear proyectos react a cada rato, aparecia error al pushear al git
class Login extends Component {
    render() {
        return (
            <div className="container">
                <h2 style={{ fontFamily: "Spicy Rice", fontWeight: 400 }}>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <div className="d-flex flex-column align-items-center">
                    <a href="https://www.google.com">Iniciar con Google</a>
                    <a href="https://www.facebook.com">Iniciar con Facebook</a>
                </div>
            </div>
        );
    }
}

export default Login;
