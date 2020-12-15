import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Row extends Component {
    render() {
        const { _id, model , std_maintainance_time , obs} = this.props.row;
        return (
            <tr>
                <td>{model}</td>
                <td>{std_maintainance_time}</td>
                <td>{obs}</td>
                <td>
                    <div>
                        <button onClick={this.props.editBoilerType}>Edit</button>
                        <button onClick={this.props.deleteBoilerType.bind(this, _id)} >Delete</button>
                    </div>
                </td>
            </tr>
        );
    }
}

Row.propTypes = {
    row: PropTypes.object.isRequired,
    editBoilerType: PropTypes.func.isRequired,
    deleteBoilerType: PropTypes.func.isRequired,
}
