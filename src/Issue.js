import React from 'react';

import { Link } from 'react-router-dom';

class Issue extends React.Component {
  
  constructor(props){
    //console.log(props.issueId);
    super(props);
    this.state = {
      id: props.issueId,
      issue: {},
      comments:[]
    };

  }
  componentDidMount(){
    this.loadIssue();
    this.loadComments();
    console.log(this.state);

  }
  loadIssue(){
    var url = 'https://secure-crag-93015.herokuapp.com/issues/' + this.state.id;
    //console.log(url);
    fetch(url, {
        // mode: 'no-cors',
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
        //body: JSON.stringify({body: "desde react"}),
    },
    ).then(response => {
        response.json().then(json => {
          this.setState({issue:json});
        });
      
    });
  }
  
  loadComments(){
    
    fetch('https://secure-crag-93015.herokuapp.com/issues/' + this.state.id + '/comments', {
        // mode: 'no-cors',
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
        //body: JSON.stringify({body: "desde react"}),
    },
    ).then(response => {
        response.json().then(json => {
          this.setState({comments:json});
        });
      
    });
  }

 
  
  render(){
    return(
      <div>
        <div>
        <h5>Issue {this.state.issue.id}</h5>
        <h5>{this.state.issue.Title}</h5>
        <h5>{this.state.issue.Description}</h5>
        <h5>{this.state.issue.Type}</h5>
        <h5>{this.state.issue.Priority}</h5>
        <h5>{this.state.issue.Creator}</h5>
        <h5>{this.state.issue.Assigned}</h5>
        </div>
        <br></br>
        <br></br>

        <div>
        {this.state.comments.map(task => 
              <div>
              <h5>{task.id}</h5>
              <h5>{task.body}</h5>
              <h5>{task.issue_id}</h5>
              <h5>{task.user_id}</h5>
              <h5>{task.created_at}</h5>
              <h5>{task.updated_at}</h5> 
              <br></br>
              </div>
          
              )}
 


        </div>
      </div>
        


    );

  }
}

export default Issue;