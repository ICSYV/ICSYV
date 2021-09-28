import React, { Component } from "react";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    const { className, children } = this.props;
    return <div className={className}>{children}</div>;
  }
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Header;
