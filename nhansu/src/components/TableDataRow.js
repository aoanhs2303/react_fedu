import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if(this.props.permission === 1) {
            return "Admin"
        } else if (this.props.permission === 2) {
            return "Quan ly"
        } else {
            return "User"
        }
    }
    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }
    render() {
        //props.editFunClick
        return (
            <tr>
                <td>{this.key}</td>
                <td>{this.props.name}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                <div className="btn-group">
                    <button onClick={() => this.editClick()} className="btn btn-warning btn-sm">
                    <i className="fa fa-pencil" />
                    </button>
                    <button className="btn btn-danger btn-sm">
                    <i className="fa fa-times" />
                    </button>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;