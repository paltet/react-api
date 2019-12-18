import React from 'react';
import { Link } from 'react-router-dom';

class Issue extends React.Component {
  
  constructor(props, issueId){
    super(props);
    this.state = {
      id: '',
      issue: []
    };
    this.setState({id: issueId});
  }

  loadIssue(){
    var url = 'https://secure-crag-93015.herokuapp.com/issues/' + this.state.id;
    console.log(url);
    window.fetch(url, {
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
          this.setState({issue: json});
        });
      }
    });
  }
  
  componentDidMount(){
    this.loadIssue();
  }
  
  render(){
    console.log(this.state.issue);
    if (this.state.issue.error === '404'){
      return(
        <div>
        <h5>This issue does not exist!</h5>
        <Link to="/issues">
          <button type="button">Back</button>
        </Link>
        </div>
      );
    }
    else{
      return(
        <div>
        <h5>funciona</h5>
        <h4>{this.state.issue.title}</h4>
        </div>
      );
    }
  }
}

export default Issue;