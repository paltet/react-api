 import React from 'react'
 import ReactDOM from 'react-dom'
import Issue from './Issue';

 function showid(id){
   console.log(id);
   ReactDOM.render(<Issue issueId={id} />, document.getElementById('root'));

 }

  const Issues = ({ issues }) => {
      return (
        <table className="table table-striped" >
          <thead>
            <tr key='tableHeader'>
              <th scope="col">Title</th>
              <th scope="col">Type</th>
              <th scope="col">Priority</th>
              <th scope="col">Status</th>
              <th scope="col">Asigned</th>
              <th scope="col">Creator</th>
              <th scope="col">Created</th>
              <th scope="col">Updated</th>
              <th colSpan="3"></th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
            <tr key={issue.id}>
              <td>{issue.Title}</td>
              <td>{issue.Type}</td>
              <td>{issue.Priority}</td>
              <td>{issue.Status}</td>
              <td>{issue.Asigned}</td>
              <td>{issue.Creator}</td>
              <td>{issue.Created}</td>
              <td>{issue.Updated}</td>
              <td>

                  <button type="button" id ={issue.id} onClick={event => showid(issue.id)} >Show</button>
           </td>
            </tr>
            ))}
          </tbody>
        </table>
      );
    };
    

    export default Issues;