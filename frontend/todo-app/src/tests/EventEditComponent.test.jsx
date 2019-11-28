import React from "react";
import ReactDOM from "react-dom";
import EventEditComponent from "../components/events/EventEditComponent";
import {
	fireEvent,
	cleanup,
	render,
	wait
} from "@testing-library/react";



describe("<EventEditComponent>", () => {
	afterEach(cleanup);


	it("renders correctly", () => {
		const div = document.createElement("div");
		const match = { params: { searchTerm: "id" } };
		ReactDOM.render(<EventEditComponent match={match} />, div);
	});

	it("displays 4 errors", async () => {
		const match = { params: { searchTerm: "id" } };
		const {
			getByTestId,
			getAllByTestId
		} = render(<EventEditComponent match={match} />);

		const submitButton = getByTestId("submit");
		fireEvent.click(submitButton);	

		await wait(() => {
			expect(getAllByTestId("alert")).toHaveLength(3);
		}, 1000);
	});

	it("displays date errors", async () => {
		const match = { params: { searchTerm: "id" } };
		const {
			getByTestId,
			getAllByTestId,
			queryByTestId
		} = render(<EventEditComponent match={match} />);

		const titleInput = getByTestId("title");
		const locationInput = getByTestId("location");
		const detailsInput = getByTestId("details");

		fireEvent.change(titleInput, { target: { value: "Legal event name" } });
		fireEvent.change(locationInput, { target: { value: "Legal event location" } });
		fireEvent.change(detailsInput, { target: { value: "Legal event details" } });

		const startDateInput = getByTestId("startDate");
		const endDateInput = getByTestId("endDate");
		const submitButton = getByTestId("submit");

		//Testing 2 illegal inputs
		fireEvent.change(startDateInput, { target: { value: "2018-06-01T08:30" } });
		fireEvent.change(endDateInput, { target: { value: "2018-06-01T08:30" } });

		fireEvent.click(submitButton);	

		await wait(() => {
			expect(getAllByTestId("alert")).toHaveLength(2);
		}, 1000);

		//Testing 1 illegal input
		fireEvent.change(startDateInput, { target: { value: "2020-06-01T08:30" } });
		fireEvent.click(submitButton);	

		await wait(() => {
			expect(getAllByTestId("alert")).toHaveLength(1);
		}, 1000);



	});
});
