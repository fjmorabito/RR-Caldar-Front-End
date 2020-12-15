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
                                <button onClick={this.props.displayForm}>Boton loco 2</button>
                                <button>Boton loco</button>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((row) => (
                        <Row key={row._id.$oid} row={row} editBoilerType={this.props.editBoilerType} deleteBoilerType={this.props.deleteBoilerType} />
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
