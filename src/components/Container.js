import React, { Component } from 'react';
import Table from './Table';
import PropTypes from 'prop-types';
import Form from './Form'
import EditForm from './EditForm'

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            showEditForm: false,
        };
        this.displayForm = this.displayForm.bind(this);
    }

    // Display new boiler type form
    displayForm = () => {
        this.setState({ showForm: true })
    }

    // Hide new boiler type form
    hideForm = () => {
        this.setState({ showForm: false })
    }

    // Display edit boiler type form
    displayEditForm = () => {
        this.setState({ showEditForm: true })
    }

    // Hide edit boiler type form
    hideEditForm = () => {
        this.setState({ showEditForm: false })
    }
    render() {
        return (
            <div>
                {this.state.showForm && <Form newBoilerType={this.props.addBoilerType} hideForm={this.hideForm} /> }
                {this.state.showEditForm && <EditForm data={this.props.data} editBoilerType={this.props.editBoilerType} hideEditForm={this.hideEditForm} displayEditForm={this.displayEditForm}/>}
                <Table data={this.props.data} displayForm={this.displayForm} editBoilerType={this.props.editBoilerType} deleteBoilerType={this.props.deleteBoilerType} hideForm={this.hideForm} hideEditForm={this.hideEditForm} displayEditForm={this.displayEditForm} />
            </div>
        );
    }
}

Container.propTypes = {
    deleteBoilerType: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
}
