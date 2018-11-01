import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./components/Navigation";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import LoginModal from "./components/login/LoginModal";
import menuItems from "./components/configs/menuConfig";
import postContent from "./components/configs/postConfig";
import footerItems from "./components/configs/footerConfig";

const modalId = "loginModal";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation items={menuItems} blogName="NewBlog" modalId={modalId} />
        <Blog posts={postContent} />
        <Footer content={footerItems} />
        <LoginModal name="Login" modalId={modalId} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
