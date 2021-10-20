import React from 'react';
import ReactDOM from 'react-dom';   //also write {react} instead of ReactDOM
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import AdditionalInfo from './AdditionalInfo';
import Data from './Data';
import {BrowserRouter as Router, Route, Link} from './react-router-dom';

class Index extends Component {
  render() {
    return (
      <div>
        <Data />
      </div>
    )
  }
}

class MovieInfo extends Component {

  render() {
    const {id} = this.props.match.params;
    return (
      <div>
        <AdditionalInfo id={id} />
      </div>
    )
  }
}

class Users extends Component {
  render() {
    return (
      <div>
        <h1>User</h1>
      </div>
    )
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
 <Router>
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/movieInfo/:id" exact component={MovieInfo} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
    )
  }
}

ReactDOM.render(   //also write render(<App />, documentgetElementById('root'))
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
