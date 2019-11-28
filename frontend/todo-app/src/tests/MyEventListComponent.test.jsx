import React from 'react';
import ReactDOM from 'react-dom';
import MyEventListComponent from '../components/events/MyEventListComponent';

it('<MyEventListComponent>', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MyEventListComponent />, div);
});