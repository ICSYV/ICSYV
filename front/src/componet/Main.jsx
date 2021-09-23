import React, { Component } from "react";
import PropTypes from "prop-types";

class Main extends Component {
  render() {
    const { className, children } = this.props;
    return <div className={className}>{children}</div>;
  }
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Main;
