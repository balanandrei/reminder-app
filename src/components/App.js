import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'; -- BEFORE
import { addReminder } from '../actions';


import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            text: ''
        }
    }

    addReminder() {
        this.props.addReminder(this.state.text);
    }

    renderReminders() {
        const { reminders } = this.props;
        return (
            <ul className="list-group col-som-4">
                {
                    reminders.map( reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <div>{reminder.text}</div>
                            </li>
                        )
                    }

                    )
                }
            </ul>
        )
    }

    render() {
        return(
            <div className="App">
                <h1 className="Title">Reminder App</h1>
                <div className="form-inline">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="I have to..."
                            onChange={ event => this.setState({ text: event.target.value }) }
                        />
                    </div>
                    <button
                        className="btn btn-success reminder-button"
                        onClick={ () => this.addReminder() }
                    >
                        Add Reminder
                    </button>
                </div>
                { this.renderReminders() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ addReminder }, dispatch);
// }

// export default connect (null, mapDispatchToProps) (App); --- BEFORE

export default connect (mapStateToProps, {addReminder}) (App); // AFTER

