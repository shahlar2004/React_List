import React from "react";

class ToDoList extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <input type="text" id="myText" className="inp" />
          <button
            id="add-btn"
            className="add-btn"
            onClick={() => this.props.addFunc()}
          >
            Add
          </button>
        </div>
        <ul id="ul-list">
          {this.props.List.map((item) => {
            return (
              <li>
                {item.Ad}
                <button className="remove-button" onClick={()=>this.props.del(item)}>remove</button>
                
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ToDoList;