import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { HolyGrail } from './components/holyGrail';
import './styles/index.scss';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <HolyGrail />
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);
