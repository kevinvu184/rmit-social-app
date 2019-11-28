import React, { Component } from 'react'
import ClassmateDataService from '../../api/classmate/ClassmateDataService.js'
import AuthenticationService from '../todo/AuthenticationService.js'
import './ClassmateComponent.css'

class ListClassmatesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            classmates: [],
            message: null
        }
        this.updateClassmateClicked = this.updateClassmateClicked.bind(this)
        this.refreshClassmateList = this.refreshClassmateList.bind(this)
        this.addClassmateClicked = this.addClassmateClicked.bind(this)
        this.deleteClassmateClicked = this.deleteClassmateClicked.bind(this)
    }

    componentDidMount() {
        this.refreshClassmateList();
    }

    refreshClassmateList() {
        let username = AuthenticationService.getLoggedInUserName()
        ClassmateDataService.retrieveAllClassmates(username)
            .then(
                response => {
                    this.setState({ classmates: response.data })
                }
            )
    }

    deleteClassmateClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        ClassmateDataService.deleteClassmate(username, id)
            .then(
                response => {
                    this.setState({ message: `Delete of classmate ${id} Successful` })
                    this.refreshClassmateList()
                }
            )

    }

    addClassmateClicked() {
        this.props.history.push(`/classmates/-1`)
    }

    updateClassmateClicked(id) {
        this.props.history.push(`/classmates/${id}`)
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Your Classmate</h1>
                <div className="container table-responsive-sm">
                    <table className="table table-hover table-sm">
                        <thead className="thead-light">
                            <tr>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Mail</th>
                                <th>Shared course</th>
                                <th>Modify Info</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.classmates.map(
                                    classmate =>
                                        <tr key={classmate.id}>
                                            <td><a href={classmate.link}><img src={classmate.image} alt="User"></img></a></td>
                                            <td><a href={classmate.link}>{classmate.name}</a></td>
                                            <td><a href={"mailto:" + classmate.mail}>{classmate.mail}</a></td>
                                            <td>{classmate.course}</td>
                                            <td><button className="btn btn-info" onClick={() => this.updateClassmateClicked(classmate.id)}>Modify</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteClassmateClicked(classmate.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <button className="btn btn-success float-right" onClick={this.addClassmateClicked}>Add Friend</button>
                </div>
            </div>
        )
    }
}

export default ListClassmatesComponent