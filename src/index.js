import React from 'react';
import reactDom from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

// const jsxElement = <h1>This is the start of my components exercise.</h1>
// console.log(jsxElement);
reactDom.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
