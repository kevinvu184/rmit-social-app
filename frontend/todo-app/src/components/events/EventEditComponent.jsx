import React, { Component } from "react"; 
import EventDataService from "../../api/events/EventDataService.js"; 
import AuthenticationService from "../todo/AuthenticationService.js"; 
import { Formik, Form, Field, ErrorMessage } from 'formik'; 
import moment from 'moment'; 
 
export class EventEditComponent extends Component { 
    constructor(props) { 
        super(props) 
 
        this.state = { 
            id: this.props.match.params.id, 
            title: '', 
            location: '', 
            details: '', 
            startDate: '', 
            endDate: '' 
         
        } 
        this.onSubmit = this.onSubmit.bind(this) 
        this.validate = this.validate.bind(this) 
      
    } 
 
    componentDidMount() { 
         
        if (this.state.id == -1) { 
            console.log('the id is', this.state.id) 
 
            return 
        } 
 
        let username = AuthenticationService.getLoggedInUserName() 
 
        EventDataService.getEvent(username,this.state.id) 
            .then( 
                response => { 
                    this.setState({ 
                        title: response.data.title, 
                        location: response.data.location, 
                        details: response.data.details, 
                        startDate: response.data.startDate, 
                        endDate: response.data.endDate 
                    })     
                } 
        ).catch(()=> console.log("Can't access data service url")) 
    } 
 
    validate(values) { 
         
        let errors = {} 
        if (!values.title) { 
            errors.title = 'Enter a title' 
        } else if (values.title.length < 3) { 
            errors.title = 'The title must be at least 3 characters' 
        } else if (values.title.length > 30) { 
            errors.title = 'The title must be less than 30 characters' 
        } 
 
        if (!values.location) { 
            errors.location = 'Enter a location' 
        } 
 
        if (values.details.length > 500) { 
            errors.details = 'Details must be less that 500 characters' 
        } 
        
        if (!values.startDate || !values.endDate) {
            errors.startDate = 'Start and end dates must not be empty'
        } else {

            let now = moment();
            let startDate = moment(values.startDate, moment.HTML5_FMT.DATETIME_LOCAL);
            let endDate = moment(values.endDate, moment.HTML5_FMT.DATETIME_LOCAL);

            if (startDate.isBefore(now)) { 
                errors.startDate = 'Enter a valid start date' 
            }
            if (endDate.isBefore(now)) { 
                errors.endDate = 'Enter a valid end date' 
            } else if (endDate.isSameOrBefore(startDate)) { 
                errors.endDate = 'The end date must be after the start date' 
            }
        }
        

        return errors 
 
    } 
 
    onSubmit(values) { 
        let username = AuthenticationService.getLoggedInUserName() 
 
        let event = { 
            id: this.state.id, 
            title: values.title, 
            location: values.location, 
            details: values.details, 
            startDate: values.startDate, 
            endDate: values.endDate 
        } 
        if (this.validate(values).length != 0) {
            return 
        }
        if (this.state.id == -1) { 
            EventDataService.createEvent(username, event) 
                .then(() => this.props.history.push('/myevents')) 
        } else { 
         
            EventDataService.updateEvent(username, this.state.id, event) 
                .then(() => this.props.history.push('/myevents')) 
        } 
 
        console.log(values); 
    } 
 
    //Change the way date and time is input (clunky) 
 
    render() { 
        let { title, location, details, startDate, endDate } = this.state 
        //Range between now and 1 year from now
        let now = moment()
        let minDate = now.format("YYYY-MM-DDThh:mm")
        let max = now.add(1, 'y')
        let maxDate = max.format("YYYY-MM-DDThh:mm")
 
        return ( 
            <div> 
                <h1>Events</h1> 
                <div className="container"> 
                    <Formik 
                        initialValues={{ title, location, details, startDate, endDate }} 
                        onSubmit={this.onSubmit} 
                        validateOnChange={false} 
                        validateOnBlur={false} 
                        validate={this.validate} 
                        enableReinitialize={true} 
                    > 
                        { 
                            () => ( 
                                <Form> 
                                    <ErrorMessage name="title" component="div" 
                                        className="alert alert-warning" data-testid="alert"/> 
                                    <ErrorMessage name="location" component="div" 
                                        className="alert alert-warning" data-testid="alert"/> 
                                    <ErrorMessage name="details" component="div" 
                                        className="alert alert-warning" data-testid="alert"/> 
                                    <ErrorMessage name="startDate" component="div" 
                                        className="alert alert-warning" data-testid="alert"/> 
                                    <ErrorMessage name="endDate" component="div" 
                                        className="alert alert-warning" data-testid="alert"/> 
                                    <fieldset className="form-group"> 
                                        <label>Title</label> 
                                        <Field className="form-control" type="text" name="title" data-testid="title"/> 
                                    </fieldset> 
                                    <fieldset className="form-group"> 
                                        <label>Location</label> 
                                        <Field className="form-control" type="text" name="location" data-testid="location"/> 
                                    </fieldset> 
                                    <fieldset className="form-group"> 
                                        <label>Details</label> 
                                        <Field className="form-control" type="text" name="details" data-testid="details"/> 
                                    </fieldset> 
                                    <fieldset className="form-group"> 
                                        <label>Start Date</label> 
                                        <Field className="form-control" type="datetime-local" name="startDate" min={minDate} max={maxDate} data-testid="startDate"/> 
                                    </fieldset> 
                                    <fieldset className="form-group"> 
                                        <label>End Date</label> 
                                        <Field className="form-control" type="datetime-local" name="endDate" min={minDate} max={maxDate} data-testid="endDate"/> 
                                    </fieldset> 
                                    <button className="btn btn-success" type="submit" data-testid="submit" >Save</button> 
                                </Form> 
                            ) 
                        } 
                 </Formik> 
 
                </div> 
            </div> 
        ); 
    } 
} 
 
export default EventEditComponent 
