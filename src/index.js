import React from 'react';
import ReactDOM from 'react-dom';
import "./css/main.css"; //main stylesheet
import App from './components/App'; //main app component
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
