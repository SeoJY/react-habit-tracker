import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <header className="navbar">
        <h1 className="navbar-title"><i className="navbar-logo fa-solid fa-clipboard-list"></i>Habit Tracker</h1>
        <div className="navbar-total-wrap">
          <span className="navbar-task-count">total task : <em>{this.props.totalCount}</em></span>
          <span className="navbar-task-count">total success : <em>{this.props.sumCount}</em></span>
        </div>
      </header>
    );
  }
}

export default Navbar;