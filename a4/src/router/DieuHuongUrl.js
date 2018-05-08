import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import News from '../components/News';
import Home from '../components/Home';
import NewsDetail from '../components/NewsDetail';
import Contact from '../components/Contact';

class DieuHuongUrl extends Component {
    render() {
        return (      
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/tin" component={News} />
                <Route exact path="/tin-tuc/:slug.:id.html" component={NewsDetail} />
                <Route exact path="/lien-he" component={Contact} />
            </div>
        );
    }
}

export default DieuHuongUrl;