import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  comp

  handleIncrement = (habit) => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const {name, count} = this.props.habit;
    return (
      <li className="habit">
        <i className="habit-bullet fa-solid fa-circle-dot"></i>
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <span className="habit-btn-wrap">
          <button className="habit-button habit-increase" onClick={this.handleIncrement}>
            <i className="fas fa-plus-square"></i>
            <span className="blind">횟수 더하기</span>
          </button>
          <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
            <i className="fas fa-minus-square"></i>
            <span className="blind">횟수 빼기</span>
          </button>
          <button className="habit-button habit-delete" onClick={this.handleDelete}>
            <i className="fas fa-trash"></i>
            <span className="blind">리스트 삭제</span>
          </button>
        </span>
      </li>
    );
  }
}

export default Habit;