import React, { Component } from "react";
import EventDataService from "../../api/events/EventDataService.js";
import AuthenticationService from "../todo/AuthenticationService.js";
import moment from "moment";

class MyEventListComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { events: [] };

		this.eventClicked = this.eventClicked.bind(this);
		this.addNewClicked = this.addNewClicked.bind(this);
		this.deleteClicked = this.deleteClicked.bind(this);
		this.refreshEvents = this.refreshEvents.bind(this);
	}

	componentDidMount() {
		this.refreshEvents();
	}

	refreshEvents() {
		let username = AuthenticationService.getLoggedInUserName();
		EventDataService.getEventsByUsername(username)
			.then(response => {
				this.setState({ events: response.data });
			})
			.catch(() => console.log("Unable to access data service url"));
	}

	eventClicked(id) {
		console.log("view event" + id);
		this.props.history.push(`/myevents/${id}`);
	}

	addNewClicked() {
		this.props.history.push(`/myevents/-1`);
	}

	deleteClicked(id) {
		let username = AuthenticationService.getLoggedInUserName();

		EventDataService.deleteEvent(username, id).then(response => {
			this.refreshEvents();
		});
	}

	render() {
		return (
			<div className="container">
				<h1 className="pb-5 display-3 text-center">My events</h1>

				<div>
					<table className="table">
						<thead>
							<tr>
								<th>Title</th>
								<th>Location</th>
								<th>Start</th>
								<th>End</th>
							</tr>
						</thead>
						<tbody>
							{this.state.events.map(event => (
								<tr key={event.id}>
									<td>{event.title}</td>
									<td>{event.location}</td>
									<td>
										{moment(event.startDate).format(
											"MMMM Do YYYY, h:mm a"
										)}
									</td>
									<td>
										{moment(event.endDate).format(
											"MMMM Do YYYY, h:mm a"
										)}
									</td>
									<td>
										<button
											className="btn btn-success"
											onClick={() =>
												this.eventClicked(event.id)
											}
										>
											Update
										</button>
									</td>
									<td>
										<button
											className="btn btn-danger"
											onClick={() =>
												this.deleteClicked(event.id)
											}
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<br />
				<button
					className="btn btn-success"
					onClick={() => this.addNewClicked()}
				>
					Add new event
				</button>
			</div>
		);
	}
}

export default MyEventListComponent;
