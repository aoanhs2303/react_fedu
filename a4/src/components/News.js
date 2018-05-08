import React, { Component } from 'react';
import NewsItem from './NewsItem';
import dl from './data.json'

class News extends Component {
    render() {
        
        
        return (
            <div>
                {/* Page Content */}
                <div className="container">
                {/* Page Heading */}
                <h1 className="my-4">Page Heading
                    <small>Secondary Text</small>
                </h1>
                <div className="row">
                    {
                        dl.map((value,key) => (
                            <NewsItem key={key}
                                tinId={value.id} 
                                tieude={value.tieude}
                                anh={value.hinhanh}
                                trichdan={value.trichdan}/>
                        ))
                    }
                </div>

                </div>


            </div>
        );
    }
}

export default News;