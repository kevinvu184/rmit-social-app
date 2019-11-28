import React from 'react';
import ReactDOM from 'react-dom';
import ListClassmatesComponent from '../components/classmate/ListClassmatesComponent.jsx';

describe("ListClassmatesComponent is under testing.", () => {
    test("it renders without crashing", () => {
        const containerDiv = document.createElement("div");
        ReactDOM.render(<ListClassmatesComponent />, containerDiv);
    });
});