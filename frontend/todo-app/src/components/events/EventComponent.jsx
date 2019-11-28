import React, { Component } from "react";
import EventDataService from "../../api/events/EventDataService.js";
import AuthenticationService from "../todo/AuthenticationService.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import moment from "moment";

class EventComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.match.params.id,
			title: "",
			details: "",
			location: "",
			startDate: moment(new Date()).format("MMMM Do YYYY, h:mm a"),
			endDate: moment(new Date()).format("MMMM Do YYYY, h:mm a"),
			attendees: []
		};

		console.log(this.state);
	}

	componentDidMount() {
		if (this.state.id === -1) {
			return;
		}

		let username = AuthenticationService.getLoggedInUserName();

		EventDataService.getEvent(username, this.state.id)
			.then(response => {
				this.setState({
					title: response.data.title,
					details: response.data.details,
					location: response.data.location,
					startDate: moment(response.data.startDate).format(
						"MMMM Do YYYY, h:mm a"
					),
					endDate: moment(response.data.endDate).format(
						"MMMM Do YYYY, h:mm a"
					),
					attendees: response.data.attendees
				});
			})
			.catch(() => console.log("Can't access data service url"));
	}

	render() {
		return (
			<div className="container" role="main">
				<div className="row">
					<div className="col-md-8">
						<div className="">
							<h1 className="display-3" id="content">
								{this.state.title}
							</h1>
              <h5>{this.state.location}</h5>
              <p></p>
							<p className="text-muted">
								{this.state.startDate} to {this.state.endDate}
							</p>
							<h4 className="p-2 md-8">Overview</h4>
							<p>{this.state.details}</p>
						</div>
					</div>
					<aside className="col-md-4">
						<div className="p-4 mb-3 bg-light rounded">
							<p className="p-2 font-italic font-weight-bold">
								Attendees
							</p>

							<ul className="list-unstyled">
								{this.state.attendees.map(attendee => (
									<li className="text-monospace">
										{attendee}
									</li>
								))}
							</ul>
						</div>
					</aside>
				</div>
			</div>
		);
	}
}

EventComponent.defaultProps = {
	id: '-1'
};

export default EventComponent;
