import ReactDOM from "react-dom";
import React from "react";
import { Provider } from 'react-redux'
import App from "./app";
import { BrowserRouter as Router} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-lazy-load-image-component/src/effects/blur.css'
import './_base.scss';
import store from './redux/store'

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
    
</Provider>, 

document.getElementById("root")
);