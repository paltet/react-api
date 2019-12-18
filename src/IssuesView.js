//import ReactDOM from 'react-dom'
import React from 'react'
import Issues from './issues.js';
import { Link } from 'react-router-dom';
//import FormIssue from './FormIssue.js';

class IssuesView extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      issues: [],
      users: []
    };
  }
  
  componentDidMount() {
    
    this.loadIssues();
    this.loadUsers();
  }
  
  loadIssues(){
    window.fetch('https://secure-crag-93015.herokuapp.com/issues', {
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
          this.setState({issues: json});
        });
      }
    });
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
  
  render() {
    
    //ReactDOM.render(<FormIssue />, document.getElementById('root'));
    return (
      <div>
        <Link to="/">
          <button type="button">Back</button>
        </Link>
        <Link to="/issues/new">
          <button type="button">New Issue</button>
        </Link>
      <Issues issues={this.state.issues} />
      </div>
    );
  }
}

export default IssuesView;
