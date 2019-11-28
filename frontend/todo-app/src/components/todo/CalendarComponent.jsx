import React, { Component } from "react";
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import EventDataService from "../../api/events/EventDataService";
import AuthenticationService from "./AuthenticationService.js";
import './HomeComponent.css'
import './CalenderComponent.css'
require("react-big-calendar/lib/css/react-big-calendar.css");

const localizer = momentLocalizer(moment);

class CalendarComponent extends Component {
  constructor(props) {
    super(props);

    var event = {
      title: "random",
      start: new Date(2019, 30, 9),
      end: new Date(2019, 30, 9),
      allDay: true
    }

    this.state = {
      events: [],
    };

    this.setState(
      {events: event}
    )

    this.refreshEvents = this.refreshEvents.bind(this)
  }

  refreshEvents() {
    let user = AuthenticationService.getLoggedInUserName()
    EventDataService.getEventsByUsername(user)
        .then(
            response => {
                this.setState({ events: response.data })
            }
        )
}

  render() {
    return (
      <div id ="calendar">
        <Calendar
          localizer ={localizer}
          events={[
            {
            start: new Date('2019-9-9'),
            end: new Date('2019-9-9'),
            title: 'Open Day'
            },
            {
            start: new Date('2019-9-30'),
            end: new Date('2019-10-1'),
            title: 'Meeting'
            },
            {
              start: new Date('2019-9-20'),
              end: new Date('2019-9-20'),
              title: ' SEPTTutorial'
            }
            
          ]}
          startAccessor="start"
          endAccessor="end"
          views={['month', 'agenda']}
          ></Calendar>
          </div>
          )
  }
}

export default CalendarComponent
