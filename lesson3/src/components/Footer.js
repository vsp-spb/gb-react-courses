import React from "react";
import FooterLinks from "./FooterLinks";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">
                {this.props.content.footerName}
              </h5>
              <p>{this.props.content.footerContent}</p>
            </div>
            <hr className="clearfix w-100 d-md-none pb-3" />
            <FooterLinks content={this.props.content.menu1} />
            <FooterLinks content={this.props.content.menu2} />
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2018 Copyright:
          <a href={this.props.content.copyright.href}>
            {this.props.content.copyright.title}
          </a>
        </div>
      </footer>
    );
  }
}
