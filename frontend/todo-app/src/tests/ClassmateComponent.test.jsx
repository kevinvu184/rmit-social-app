import React from 'react';
import ReactDOM from 'react-dom';
import ClassmateComponent from '../components/classmate/ClassmateComponent.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClassmateComponent />, div);
});