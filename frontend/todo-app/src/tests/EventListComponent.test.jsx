import React from 'react';
import ReactDOM from 'react-dom';
import EventListComponent from '../components/events/EventListComponent';

it('<EventListComponent>', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EventListComponent />, div);
});