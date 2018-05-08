import React, { Component } from 'react';

class NoiDung extends Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        console.log('PROPS: componentWillReceiveProps đã chạy');
    }

    shouldComponentUpdate(nextProps, nextState) {
    console.log('PROPS: shouldComponentUpdate đã chạy');
    return true;
    }
    
    componentWillUpdate(nextProps, nextState) {
    console.log('PROPS: componentWillUpdate đã chạy');
    }

    componentDidUpdate(prevProps, prevState) {
    console.log('PROPS: componentDidUpdate đã chạy');
    }

    render() {
        console.log('Render cua PROPS');
        return (
            <div>
                <h4>Xin chao: {this.props.ten}</h4>
            </div>
        );
    }
}

export default NoiDung;