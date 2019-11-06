import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home/Home';
import Closet from './components/Closet/Closet';
import * as serviceWorker from './serviceWorker';
import './index.css';

const Routes = () => {
    return (
        <Router>
            <App>
                <Switch>
                    <Route exact path='/' render={() => <Home />} />
                    <Route exact path='/closet' render={() => <Closet />} />
                </Switch>
            </App>
        </Router>
    );
}

ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
