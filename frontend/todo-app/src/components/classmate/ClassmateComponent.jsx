import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ClassmateDataService from '../../api/classmate/ClassmateDataService.js'
import AuthenticationService from '../todo/AuthenticationService.js'
import './ClassmateComponent.css'

class ClassmateComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            snumber: '',
            name: '',
            mail: '',
            course: '',
            link: '',
            image: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        if (this.state.id === -1) {
            return
        }
        let username = AuthenticationService.getLoggedInUserName()
        ClassmateDataService.retrieveClassmate(username, this.state.id)
            .then(response => this.setState({
                snumber: response.data.snumber,
                name: response.data.name,
                mail: response.data.mail,
                course: response.data.course,
                link: response.data.link,
                image: response.data.image
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.snumber) {
            errors.snumber = 'Enter a Student number'
        } else if (!values.name) {
            errors.name = 'Enter a Student name'
        } else if (!values.mail) {
            errors.mail = 'Enter a Student mail'
        }
        return errors
    }

    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUserName()
        let classmate = {
            id: this.state.id,
            snumber: values.snumber,
            name: values.name,
            mail: values.mail,
            course: values.course,
            link: values.link,
            image: values.image
        }
        if (this.state.id === -1) {
            ClassmateDataService.createClassmate(username, classmate)
                .then(() => this.props.history.push('/classmates'))
        } else {
            ClassmateDataService.updateClassmate(username, this.state.id, classmate)
                .then(() => this.props.history.push('/classmates'))
        }
    }

    render() {
        let { snumber, name, mail, course, link, image } = this.state
        return (
            <div>
                <h1 className="text-center">New Classmate</h1>
                <div className="container p-auto">
                    <Formik
                        initialValues={{ snumber, name, mail, course, link, image }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="snumber" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="name" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="mail" component="div"
                                        className="alert alert-warning" />
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <fieldset className="form-group">
                                                <label>Student number *</label>
                                                <Field className="form-control" type="text" name="snumber" placeholder="Enter your friend ID" required />
                                            </fieldset>
                                            <fieldset className="form-group">
                                                <label>Name *</label>
                                                <Field className="form-control" type="text" name="name" placeholder="Enter your friend name" required />
                                            </fieldset>
                                            <fieldset className="form-group">
                                                <label>Mail *</label>
                                                <Field className="form-control" type="email" name="mail" placeholder="Enter your friend mail" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-sm-6">
                                            <fieldset className="form-group">
                                                <label>Course</label>
                                                <Field className="form-control" type="text" name="course" placeholder="Enter shared courses, seperate by comma" />
                                            </fieldset>
                                            <fieldset className="form-group">
                                                <label>Link</label>
                                                <Field className="form-control" type="text" name="link" placeholder="Enter your friend social media link" />
                                            </fieldset>
                                            <fieldset className="form-group">
                                                <label>Image</label>
                                                <Field className="form-control" type="text" name="image" placeholder="Enter your friend picture link" />
                                            </fieldset>
                                        </div>
                                    </div>
                                    <button className="btn btn-success float-right" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default ClassmateComponent