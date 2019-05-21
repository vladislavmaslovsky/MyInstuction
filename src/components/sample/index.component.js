import React, { Component } from 'react';
import axios from 'axios';
// import TableRow from './TableRow';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'person_name',
        selector: 'person_name',
        sortable: true,
    },
    {
        name: 'business_name',
        selector: 'business_name',
        sortable: true,
        // right: true,
    },
    {
        name: 'business_gst_number',
        selector: 'business_gst_number',
        sortable: true,
        // right: true,
    },
];


export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = { business: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/business')
            .then(response => {
                this.setState({ business: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    // tabRow() {
    //     return this.state.business.map(function (object, i) {
    //         return <TableRow obj={object} key={i} />;
    //     });
    // }

    render() {
        return (
            <div>
                <h3 align="center">Business List</h3>
                <DataTable
                    columns={columns}
                    data={this.state.business}
                    pagination={true}
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5,10,15]}
                />
            </div>
        );
    }
}