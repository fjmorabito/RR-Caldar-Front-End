import React, { Component } from 'react';
import Table from './Table';
import PropTypes from 'prop-types';
import Form from './Form'

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showForm: false
        };
        this.displayForm = this.displayForm.bind(this);
    }

    // Display new item form
    displayForm = () => {
        this.setState({ showForm: true })
    }

    // Display new item form
    hideForm = () => {
        this.setState({ showForm: false })
    }

    render() {
        return (
            <div>
                {this.state.showForm && <Form newBoilerType={this.props.addBoilerType} hideForm={this.hideForm}/>}
                <Table data={this.props.data} displayForm={this.displayForm} deleteBoilerType={this.props.deleteBoilerType}/>
            </div>
        );
    }
}

Container.propTypes = {
    deleteBoilerType: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
}
