import React from "react";
import ReactDOM from "react-dom";
import Developer from "./components/Developer";

let dev = new Developer(prompt("Enter your name"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(new Date().toLocaleString("ru"));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h1>{dev.getName()}</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
