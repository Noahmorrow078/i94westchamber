import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { hydrate, render } from "react-dom";

ReactDOM.render(<App />, document.getElementById('root'));
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}