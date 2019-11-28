import React, { Component } from "react";
import EventDataService from "../../api/events/EventDataService.js";
import AuthenticationService from "../todo/AuthenticationService.js";
import moment from "moment";

class EventListComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			events: []			
		};
		this.createButton = this.createButton.bind(this);
	}

	componentDidMount() {
		let username = AuthenticationService.getLoggedInUserName();

		EventDataService.getEvents(username)
			.then(response => {
				console.log(response);
				this.setState({ events: response.data });
				console.log(this.state.events);
			})
			.catch(() => console.log("Can't access data service url"));
	}

	eventClicked(id) {
		console.log("view event" + id);
		this.props.history.push(`/events/${id}`);
	}

	attendClicked(source, id, event) {
		console.log("updating attend status of " + id);
		EventDataService.updateAttendEvent(AuthenticationService.getLoggedInUserName(), id, event);
		
		console.log(source.target.firstChild.data)
		let current = source.target.firstChild.data;

		if (source.target.firstChild.data == "Attend") {
			source.target.className = "btn btn-sm btn-success";
			source.target.firstChild.data = "Attending";
		} else {
			source.target.className = "btn btn-sm btn-outline-secondary";
			source.target.firstChild.data = "Attend";
		}

		

		//source.style.className="btn btn-sm btn-success"
	}

	createButton(event) {
		var attending = event.attendees.includes(AuthenticationService.getLoggedInUserName());
		var attendName = "btn btn-sm";
		var attendText = "Attend";
		if (attending) {
			attendName += " btn-success";
			attendText = "Attending";
		} else {
			attendName += " btn-outline-secondary";
		}

		return <button class={attendName} onClick={(ev)=>this.attendClicked(ev,event.id,event)}>{attendText}</button>;
		
	}

	render() {
		return (
			<div className="container" role="main">
				<h1 className="display-3 text-center">All events</h1>
				<div className="d-flex flex-wrap justify-content-center">
					{this.state.events.map(event => (
						<div className="m-2 card">
							{/* Image extention
                 <img
                  className="card-img-top"
                  style={{ height: 225 + "px", width: 100 + "%" }}
                /> */}

							<div className="card-body">
								<h5 className="card-title">{event.title}</h5>
								<p className="card-text">
									{moment(event.startDate).format(
										"MMMM Do YYYY, h:mm a"
									)}
								</p>
								<div className="d-flex justify-content-between align-items-center">
									<div className="btn-group">
										<button
											type="button"
											className="btn btn-sm btn-outline-secondary"
											onClick={() =>
												this.eventClicked(event.id)
											}
										>
											View
										</button>

										{this.createButton(event)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default EventListComponent;
