import React, { Component } from 'react';
import Container from '../Container';
import PropTypes from 'prop-types';

export default class Section extends Component {
    render() {
        return (
            <section style={sectionStyle}>
                <Container data={this.props.data} editBoilerType={this.props.editBoilerType} deleteBoilerType={this.props.deleteBoilerType} addBoilerType={this.props.addBoilerType} />
            </section>
        );
    }
}

Section.propTypes = {
    data: PropTypes.array.isRequired,
    deleteBoilerType: PropTypes.func.isRequired,
    addBoilerType: PropTypes.func.isRequired,
}

const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    background: '#fff',
    height: 'auto',
    alingItems: 'center',
    padding: '10px'
}