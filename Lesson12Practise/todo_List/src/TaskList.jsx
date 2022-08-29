import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

const baseUrl = 'https://630cea01b37c364eb7fc851e.mockapi.io/tasks';

class TaskList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.hetchTasksList();
  }

  hetchTasksList = () => {
    fetch(baseUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(tasksList => {
        this.setState({
          tasks: tasksList,
        });
      });
  };

  onCreate = text => {
    const newTask = {
      text,
      done: false,
    };

    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;utc-8',
      },
      body: JSON.stringify(newTask),
    }).then(response => {
      if (response.ok) {
        this.hetchTasksList();
      } else {
        throw new Error('Failed to create task');
      }
    });
  };

  handleStatusChange = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };
    fetch(`${baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json:utc-8',
      },
      body: JSON.stringify(updatedTask),
    }).then(response => {
      if (response.ok) {
        this.hetchTasksList();
      } else {
        throw new Error('Failed to create task');
      }
    });
  };

  handleTaskDelete = id => {
    fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    }).then(response => {
      if (response.ok) {
        this.hetchTasksList();
      } else {
        throw new Error('Failed to delete task');
      }
    });
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
