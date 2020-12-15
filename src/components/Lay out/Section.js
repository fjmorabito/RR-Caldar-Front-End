import React, { Component } from 'react';
import Container from '../Container';
import PropTypes from 'prop-types';

export default class Section extends Component {
    render() {
        return (
            <section>
                <Container data={this.props.data} deleteBoilerType={this.props.delItem} addBoilerType={this.props.addItem} />
            </section>
        );
    }
}

Section.propTypes = {
    data: PropTypes.array.isRequired,
    deleteBoilerType: PropTypes.func.isRequired,
    addBoilerType: PropTypes.func.isRequired,
}