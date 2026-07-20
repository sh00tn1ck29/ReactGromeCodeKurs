import React, { Component } from 'react';
import TasksList from './TasksList';
import CreateTaskInput from './CreateTaskInput';
import { fetchTasksList, createTask, updateTask, deleteTask } from './tasksGateway';

class TodoList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.getTasks();
  }

  getTasks = () => {
    fetchTasksList()
      .then(tasks => {
        this.setState({ tasks });
      })
      .catch(() => {
        alert('Failed to load tasks');
      });
  };

  handleTaskCreate = text => {
    const newTask = {
      text,
      done: false,
    };

    createTask(newTask)
      .then(() => {
        this.getTasks();
      })
      .catch(() => {
        alert('Failed to create task');
      });
  };

  handleTaskStatusChange = id => {
    const task = this.state.tasks.find(t => t.id === id);
    const updatedTask = {
      ...task,
      done: !task.done,
    };

    updateTask(id, updatedTask)
      .then(() => {
        this.getTasks();
      })
      .catch(() => {
        alert('Failed to update task');
      });
  };

  handleTaskDelete = id => {
    deleteTask(id)
      .then(() => {
        this.getTasks();
      })
      .catch(() => {
        alert('Failed to delete task');
      });
  };

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.handleTaskCreate} />
          <TasksList
            tasks={this.state.tasks}
            handleTaskStatusChange={this.handleTaskStatusChange}
            handleTaskDelete={this.handleTaskDelete}
          />
        </main>
      </>
    );
  }
}

export default TodoList;
