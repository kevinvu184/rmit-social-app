import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import RegisterComponent from './RegisterComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import TodoComponent from './TodoComponent.jsx'
import HomeComponent from './HomeComponent.jsx'


import CalendarComponent from './CalendarComponent.jsx';
import EventListComponent from '../events/EventListComponent.jsx'
import MyEventListComponent from '../events/MyEventListComponent.jsx'
import EventComponent from '../events/EventComponent.jsx'
import EventEditComponent from '../events/EventEditComponent.jsx'
import ClassmateComponent from '../classmate/ClassmateComponent.jsx'
import ListClassmatesComponent from '../classmate/ListClassmatesComponent.jsx'
import MapComponent from '../map/MapComponent.jsx'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/register" component={RegisterComponent}/>
                            
                            <AuthenticatedRoute path="/home" component={HomeComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                            <AuthenticatedRoute path="/events/:id" component={EventComponent}/>
                            <AuthenticatedRoute path="/events" component={EventListComponent} />
                            <AuthenticatedRoute path="/myevents/:id" component={EventEditComponent}/>
                            <AuthenticatedRoute path="/myevents" component={MyEventListComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            <AuthenticatedRoute path="/classmates/:id" component={ClassmateComponent}/>
                            <AuthenticatedRoute path="/classmates" component={ListClassmatesComponent}/>
                            <AuthenticatedRoute path="/Calendar" component={CalendarComponent}/>
                            <AuthenticatedRoute path="/map" component={MapComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
            </div>
        )
    }
}

export default TodoApp