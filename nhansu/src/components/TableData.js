import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    mappingDataUser = () => (
        this.props.data.map((value, key) => (
            <TableDataRow changeEditUserStatus={() => this.props.changeEditUserStatus()} editFunClick={(user) => this.props.editFun(value)} name={value.name} tel={value.tel} permission={value.permission} key={key}/>
        ))
    )

    //this.props.editFun


    render() {
        // console.log(this.props.data);
        return (
            <div className="col-9">
            <table className="table">
                <thead>
                <tr>
                    <td>#</td>
                    <th>Tên</th>
                    <th>Sdt</th>
                    <th>Quyền</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {this.mappingDataUser()}

                </tbody>
            </table>
            </div>

        );
    }
}

export default TableData;