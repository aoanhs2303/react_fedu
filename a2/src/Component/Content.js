import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
      super(props)
      this.state = {
          trangThai: 0
      }
  }
  thongbao = () => {alert('sử lý event trong reactjs')}
  thongbao2 = (x) => {alert(x)}
  renderButton = () => (
    <div className="btn-group">
        <button className="btn btn-info" onClick={this.thongbao}>Clickme</button>
        <button className="btn btn-danger" onClick={() => this.thongbao2("thamso")}>Clickme</button>
        <button className="btn btn-primary" onClick={this.thongbao2.bind(this, "dùng bind")}>Clickme</button>
        <button className="btn btn-info" onClick={this.editClick}>Edit</button>
    </div>
  )
  renderForm = () => (
    <div className="editX input-group">
        <input defaultValue={this.props.tieude} className="form-control" type="text" style={{width: '80%'}} />   
        <button className="btn btn-success" onClick={this.saveClick}>Save</button>
    </div>
  )

  displayCheck = () => {
      if(this.state.trangThai === 0) {
          return this.renderButton();
      } else {
        return this.renderForm();
      }
  }

  editClick = () => {
    this.setState({trangThai: 1});
  }

  saveClick = () => {
    this.setState({trangThai: 0});
  }

  render() {
    return (
        <section>
            <div className="container">
            <div className="row align-items-center">
                <div className={"col-lg-6 " + this.props.vitri1}>
                <div className="p-5">
                    <img
                    className="img-fluid rounded-circle"
                    src={this.props.anh}
                    alt
                    />
                </div>
                </div>
                <div className={"col-lg-6 " + this.props.vitri2}>
                <div className="p-5">
                    <h2 className="display-4">{this.props.tieude}</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod aliquid, mollitia odio veniam sit iste esse assumenda
                    amet aperiam exercitationem, ea animi blanditiis recusandae!
                    Ratione voluptatum molestiae adipisci, beatae obcaecati.
                    </p>
                    {this.displayCheck()}    
                    
                </div>
                </div>
            </div>
            </div>
        </section>
    );
  }
}

export default Content;
