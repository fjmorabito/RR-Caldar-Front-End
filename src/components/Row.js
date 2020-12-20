import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Row extends Component {
    render() {
        const { model, std_maintainance_time, obs } = this.props.row;
        return (
            <tr style={rows}>
                <td style={cells}>{model}</td>
                <td style={cells}>{std_maintainance_time}</td>
                <td style={cells}>{obs}</td>
                <td>
                    <div style={buttonDiv}>
                        <button style={buttonStyle} onClick={this.props.displayEditForm}>Edit</button>
                        <button style={buttonStyle} onClick={this.props.deleteBoilerType.bind(this, model)}>Delete</button>
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

const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '6px',
    margin: '0 3px 0 0',
    borderWidth: '0.5px',
    cursor: 'pointer',
    textStyle: 'bold'
}

const buttonDiv = {
    display: 'flex',
    justifyContent: 'center',
}

const cells = {
    padding: '5px 20px',
    textAlign: 'center',
    verticalAlign: 'middle'
}

const rows = {
    backgroundColor: '#6C87F4',
    lineHeight: '25px',
    border: '1px solid #0D1C58',
}


