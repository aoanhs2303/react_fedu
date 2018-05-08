import React, { Component } from 'react';

class AddData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthai: false,
            id: "",
            name: "",
            tel: "",
            permission: "1"
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    thayDoiTrangThai = () => {
        this.setState({
            trangthai: !this.state.trangthai
        });
    }

    hienThiNut = () => {
        if(this.state.trangthai === true) {
            return <div className="btn btn-block btn-outline-danger" onClick={() => this.thayDoiTrangThai()}>Đóng lại</div>   
        } else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.thayDoiTrangThai()}>Thêm mới</div>     
        }
    }
    
    hienThiForm = () => {
        if(this.state.trangthai === true) {
            return (
                <div className="card border-secondary">
                    <form>
                    <div className="card-header">Thêm mới</div>
                    <div className="card-body">
                    <div className="form-group">
                        <input onChange={(event) => this.isChange(event)} type="text" name="name" className="form-control" placeholder="Nhập tên" />
                    </div>
                    <div className="form-group">
                        <input onChange={(event) => this.isChange(event)} type="text" name="tel" className="form-control" placeholder="Nhập sdt" />
                    </div>
                    <div className="form-group" >
                        <select className="form-control" onChange={(event) => this.isChange(event)} name="permission">
                            <option value={1}>Admin</option>
                            <option value={2}>Manager</option>
                            <option value={3}>User</option>
                        </select>
                    </div>
                    <button type="reset" onClick={(name,tel,permission) => this.props.add(this.state.name,this.state.tel,this.state.permission)} className="btn btn-primary btn-sm btn-block">Thêm</button>
                    </div>
                    </form>
                </div>
            )   
        } 
    }

    render() {
        return (
        <div className="col-3">
            {this.hienThiNut()}
            {this.hienThiForm()}
        </div>
        );
    }
}

export default AddData;