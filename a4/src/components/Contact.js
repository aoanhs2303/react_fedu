import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            fName: "",
            fEmail: "",
            fMess: "",
            fJob: "developer",
            fImage: ""
        }
    }
    
    submitFrom = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect: true
        });
    }

    isChange = (event) => {
        const ten = event.target.name;
        const giatri = event.target.value;
        this.setState({
            [ten]: giatri
        });
    }

    isFileChange = (event) => {
        const fImageName = event.target.files[0].name;
        this.setState({
            fImage: fImageName
        });
    }

    getGiaTri = () => {
        var noidung = "";
        noidung += "Ten nhan duoc la: " + this.state.fName;
        noidung += "Email nhan duoc la: " + this.state.fEmail;
        noidung += "Message nhan duoc la: " + this.state.fMess;
        noidung += "Job nhan duoc la: " + this.state.fJob;
        noidung += "Image nhan duoc la: " + this.state.fImage;
        return noidung;
    }

    render() {
        if(this.state.isRedirect) {
            console.log(this.getGiaTri());
            return <Redirect to="/" />;
        }
        return (
            <div className="container">
                <div className="col-lg-6 offset-3">
                    <h1 className="text-center">Liên hệ</h1>
                    <form style={{padding: 30}}>
                    <div className="form-group">
                        <label htmlFor="a">Name</label>
                        <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="fName"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="b">Email</label>
                        <input onChange={(event) => this.isChange(event)} type="email" className="form-control" name="fEmail" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="b">Image</label>
                        <input onChange={(event) => this.isFileChange(event)} type="file" className="form-control" name="fImage" />
                    </div>
                    <div className="form-group">
                        <label>Job</label>
                        <select value={this.state.fJob} onChange={(event) => this.isChange(event)} className="form-control" name="fJob">
                          <option value="student">Student</option>
                          <option value="developer">Developer</option>
                          <option value="desinger">Designer</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="c">Message</label>
                        <textarea onChange={(event) => this.isChange(event)} className="form-control" name="fMess" cols={30} rows={3} defaultValue={""} />
                    </div>
                    
                    <button onClick={(event) => this.submitFrom(event)} type="submit" className="btn btn-dark">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;