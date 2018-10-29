import React from "react";
import ReactDOM from "react-dom";
import Navigation from './components/Navigation';
import menuItems from './components/menuConfig' 

class App extends React.Component {
  render() {
    return (
      <Navigation items={menuItems} blogName='NewBlog'/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
