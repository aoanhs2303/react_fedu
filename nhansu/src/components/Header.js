import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1 className="display-3">Quản lý user</h1>
                    <p className="lead">với dữ liệu json</p>
                    <button onClick={() => this.props.ketNoi()} className="btn btn-primary">Show search</button>
                </div>
            </div>
        );
    }
}

export default Header;