import React, { Component } from 'react';

class EditData extends Component {
    //props.userEditObj
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObj.id,
            name: this.props.userEditObj.name,
            tel: this.props.userEditObj.tel,
            permission: this.props.userEditObj.permission
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;

        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus()
    }

    render() {
        // console.log(this.state);
        
        return (
            <div className="card border-secondary mb-3">
                <form>
                <div className="card-header">Sửa thông tin user</div>
                <div className="card-body">
                <div className="form-group">
                    <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObj.name} type="text" name="name" className="form-control" placeholder="Nhập tên" />
                </div>
                <div className="form-group">
                    <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObj.tel} type="text" name="tel" className="form-control" placeholder="Nhập sdt" />
                </div>
                <div className="form-group" >
                    <select onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObj.permission} className="form-control" name="permission">
                        <option value={1}>Admin</option>
                        <option value={2}>Manager</option>
                        <option value={3}>User</option>
                    </select>
                </div>
                <button onClick={() => this.saveButton()} type="button" className="btn btn-primary btn-sm btn-block">Lưu</button>
                </div>
                </form>
            </div>
        );
    }
}

export default EditData;