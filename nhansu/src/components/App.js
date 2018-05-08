import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddData from './AddData';

import DataUser from './Data.json'

const uuidv4 = require('uuid/v4');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: true,
      dataUser: DataUser,
      editUserStatus: false,
      userEditObj: {}
    }
  }
  
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
    console.log(dl);
  }

  getNewUserData = (name,tel,permission) => {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.permission = parseInt(permission);
    var items = this.state.dataUser;
    items.push(item);
    console.log(item);
    this.setState({
      dataUser: items
    });
  }

  editUser = (user) => {
    // alert("da ket noi");
    // alert(user)
    // console.log(user);
    this.setState({
      userEditObj: user
    });
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  getUserEditInfoApp = (info) => {
    console.log(info);
    this.state.dataUser.forEach((value, key)=>{
      if(value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
  }


  // thongBao = () => { console.log('ket noi thanh cong'); }
  render() {
    var ketqua = [];
    this.state.dataUser.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    })
    // console.log(ketqua);
    // console.log(this.state.dataUser);
    return (
      <div>
        <Header ketNoi={() => this.doiTrangThai()}/>
        <div className="container">
          <Search 
            getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)} 
            userEditObj={this.state.userEditObj}
            changeEditUserStatus={() => this.changeEditUserStatus()} 
            editUserStatus={this.state.editUserStatus } 
            check={(dl) => this.getTextSearch(dl)} 
            hienThiForm={this.state.hienThiForm}/>
          <div className="row">
            {/* <TableData data={this.state.dataUser}/> */}
            <TableData changeEditUserStatus={() => this.changeEditUserStatus()} editFun={(user) => this.editUser(user)} data={this.state.dataUser}/>
            <AddData add={(name,tel,permission) => this.getNewUserData(name,tel,permission) }/>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
