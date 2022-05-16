import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return {...habit, count: habit.count + 1}
      }
      return item;
    })
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count; // 냄새나는 코드...
    const habits = this.state.habits.map(item => {
      const count = habit.count - 1;
      if (item.id === habit.id) {
        return {...habit, count: count < 0 ? 0 : count}
      }
      return item;
    })
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits];
    const newId = habits.length + 1;
    const newItem = { id: newId, name: name, count: 0}
    habits.push(newItem);
    this.setState({ habits });
    name = '';
  };

  handleReset = () => {
    // const habits = [...this.state.habits];
    // habits.map(habit => habit.count = 0);
    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0) {
        return {...habit, count: 0}
      }
      return habit;
    })
    this.setState({ habits });
  }

  render() {
    const totalCount = this.state.habits.filter(item => item.count > 0).length;
    let sumCount = 0;
    this.state.habits.map(item => sumCount += item.count);
    
    return (
      <div className="wrap">
        <Navbar 
          totalCount={totalCount}
          sumCount={sumCount}
        />
        <Habits 
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onAdd={this.handleAdd}
        />
      </div>
    );
  }
}
export default App;
