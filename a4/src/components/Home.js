import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="my-4">Trang Chủ
                        <small> Secondary Text</small>
                    </h1>
                    <div className="row">
                        <div className="jumbotron">
                            <h1 className="display-3">Jumbo heading</h1>
                            <p className="lead">Jumbo helper text</p>
                            <hr className="my-2" />
                            <p>More info</p>
                            <p className="lead">
                                <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;