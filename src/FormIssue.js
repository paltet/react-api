import React, { Component } from 'react';
import './FormIssue.css';
//import ReactDOM from 'react-dom'



class FormIssue extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '' ,
      description:'',
      kind:'select',
      type:'select',
      assignee:'select',
      priority:'',
      token:'',
      user: [],
      names:[],
    };
  }
  
  myChangeHandler = (event) => {
    this.setState({title: event.target.value});
    this.setState({description: event.target.value});
    this.setState({kind: event.target.value});
    this.setState({priority: event.target.value});
    this.setState({user: event.target.value});
    this.setState({assignee: event.target.value});
    this.setState({token: event.target.value});
  }

  
  
  componentDidMount() {

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
          this.setState({user: json});

          for (var i = 0; i < this.state.user.length; i++) {
            (this.state.names).push(this.state.user[i].first_name);
          }
          console.log(this.state.names);
        });
      }
    });
  }
 
  componentpost(){
    window.fetch("http://example.com/api/endpoint/", {
      method: "post",
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
        type: this.state.kind,
        priority: this.state.type,
        asigned: this.state.asignee
      })
    })
    .then( (response) => { 
      if (response.ok){
        console.log(response);
      }
    });
  }
  
  render() {
  
    return (
        
      <form onSubmit={this.componentpost()}>
        <h1>Create Issue</h1>   
  
        <div className="form-group">
          <p>Enter Title:</p>
          <input    
            className="form-control"
            id="exampleFormControlInput1" 
            name='Title'
            type='text'
            value={this.state.title}
            onChange={event => this.setState({ title: event.target.value })}
          />
        </div>
        <div className="form-group">
          <p>Description:</p>
          <textarea className="form-control" id="exampleFormControlTextarea1" 
            value={this.state.description}
            onChange={event => this.setState({ description: event.target.value })}
          />
        </div>
        <div className="form-group">
          <p>Kind:</p>
          <select   className="form-control" id="exampleFormControlSelect1" value={this.state.kind}
          onChange={event => this.setState({ kind: event.target.value })}>
            <option  key = 'Bug' value="Bug">Bug</option>
            <option  key = 'Enhancement' value="Enhancement">Enhancement</option>
            <option  key = 'Proposal' value="Proposal">Proposal</option>
            <option  key = 'Task' value="Task">Task</option>
          </select>
        </div>
  
        <div className="form-group">
          <p>Type:</p>
          <select className="form-control" id="exampleFormControlSelect1" name="cars"  value={this.state.type}
          onChange={event => this.setState({ type: event.target.value })}>
            <option  key ='trivial' value='Trivial'>Trivial</option>
            <option  key ='minor' value='Minor'>Minor</option>
            <option  key ='major' value='Major'>Major</option>
            <option  key ='critical' value='Critical'>Critical</option>
            <option  key ='blocker' value='Blocker'>Blocker</option>
          </select>
        </div>
    
        <div  className="form-group">
        <p>Asignee:</p>
        <select className="form-control" id="exampleFormControlSelect1"    value={this.state.assignee}
        onChange={event => this.setState({ assignee: event.target.value })} >
        {this.state.names.map(task => <option value={task}>{task}</option>)} 
        </select>
        </div>
    
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">Example file input</label>
          <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
        </div>
        
        <div className="form-group">
          <p>Token:</p>
          <input    
            className="form-control"
            id="exampleFormControlInput1" 
            name='Token'
            type='text'
            value={this.state.token}
            onChange={event => this.setState({ token: event.target.value })}
          />
        </div>
    
    
        <input type="submit" value='Confirmar'/>
        <span> </span>
        <button variant="contained">Cancelar</button>
      </form>
    );
  }
}

export default FormIssue;
//ReactDOM.render(<FormIssue />, document.getElementById('root'));