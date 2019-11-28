import React from 'react';
import ReactDOM from 'react-dom';
import EventComponent from '../components/events/EventComponent';

it('<EventComponent>', () => {
    const div = document.createElement('div');
    const match = { params: { searchTerm: 'id' } }
    console.log(match);

    ReactDOM.render(<EventComponent match={match}/>, div);
});