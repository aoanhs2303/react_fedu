import React, { Component } from 'react';
import dl from './data.json'

class NewsDetail extends Component {
    render() {
        return (
            dl.map((value, key) => {
                if(value.id === parseInt(this.props.match.params.id)) {
                    return (
                        <div className="container" key={key}>
                            <div className="col-lg-10 offset-1">
                                <div className="card mt-4">
                                <img className="card-img-top img-fluid" src={value.hinhanh} alt="anh dep" />
                                <div className="card-body">
                                    <h3 className="card-title">{value.tieude}</h3>
                                </div>
                                </div>
                                <div className="card card-outline-secondary my-4">
                                <div className="card-header">
                                    Nội dung
                                </div>
                                <div className="card-body">
                                    {value.noidung}
                                </div>
                                </div>
                            </div>
                        </div>  
                    )
                }
                return true;
            })
        )
    }
}

export default NewsDetail;