import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

export default class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Standard maintainance required time</th>
                        <th>Observation</th>
                        <th>
                            <div>
                                <button onClick={this.props.displayForm}>Create a Boiler Model</button>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((row) => (
                        <Row key={row.model} row={row} deleteBoilerType={this.props.deleteBoilerType} displayEditForm={this.props.displayEditForm}/>
                    ))}
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    data: PropTypes.array.isRequired,
    displayForm: PropTypes.func.isRequired,
    editBoilerType: PropTypes.func.isRequired,
    deleteBoilerType: PropTypes.func.isRequired,
}
