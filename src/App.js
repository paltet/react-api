import ReactDOM from 'react-dom'
import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';
//import Issues from './issues.js';
//import FormIssue from './FormIssue.js';
import Issue from './Issue.js'

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      users: [],
      issueId: ''
    };
    
    this.handleChangeIssue = this.handleChangeIssue.bind(this);
    this.handleSubmitIssue = this.handleSubmitIssue.bind(this);
  }
  
  componentDidMount() {
    
    //this.loadIssues();
    //this.loadUsers();
  }
  
  loadUsers(){
    window.fetch('https://secure-crag-93015.herokuapp.com/users', {
      // mode: 'no-cors',
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      //body: JSON.stringify({body: "desde react"}),
    },
    ).then(response => {
      if (response.ok) {
        response.json().then(json => {
          this.setState({users: json});
        });
      }
    });
  }
  
  
  handleSubmitIssue(event){
    ReactDOM.render(<Issue issueId = {this.state.issueId} />, document.getElementById('root'));
  }
  
  handleChangeIssue(event){
    this.setState({issueId: event.target.value});
  }
  
  
  render() {
    //console.log(this.state.issueId);
    return (
      <div>
        <br></br>
        <Link to="/issues">
          <button type="button">All issues</button>
        </Link>
        <Link to="/issues/new">
          <button type="button">New issue</button>
        </Link>
      </div>
    );
  }
}

export default App;
