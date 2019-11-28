import React from 'react';
import ReactDOM from 'react-dom';
import CalendarComponent from  '../components/todo/CalendarComponent';

//@todo: create front-end tests.
it('Calendar renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CalendarComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
})