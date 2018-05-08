import React, { Component } from 'react';
import EditData from './EditData';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: "",
            userObj: {}
        }
    }
    
    isChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        });
    }

    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getUserEditInfoApp(info);
    }

    isShowEditForm = () => {
        if(this.props.editUserStatus === true) {
            return <EditData 
                    getUserEditInfo={(info) => this.getUserEditInfo(info)}
                    userEditObj={this.props.userEditObj} 
                    changeEditUserStatus={this.props.changeEditUserStatus}/>
        }
    }

    hienThiSearch = () => {
        if(this.props.hienThiForm) {
            return (
                <div>
                    {this.isShowEditForm()}
                    <div className="row">
                        <div className="btn-group ml-auto">
                        <input onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="Nhập từ khóa" />
                        <button onClick={(dl) => this.props.check(this.state.tempValue)} className="btn btn-primary">Tìm</button>
                        </div>
                    </div>
                    <hr />
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.hienThiSearch()}
            </div>
        );
    }
}

export default Search;