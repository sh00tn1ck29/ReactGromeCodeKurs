import React, { Component } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from './tasksApi';
import CreateTask from './CreateTask';
import TasksList from './TasksList';
import './index.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.loadTasks();
  }

  loadTasks = () => {
    this.setState({ loading: true, error: null });
    fetchTasks()
      .then(data => {
        this.setState({
          tasks: data || [],
          loading: false,
        });
      })
      .catch(err => {
        this.setState({
          error: 'Failed to load tasks. Please check your API connection.',
          loading: false,
        });
        console.error('Load error:', err);
      });
  };

  handleCreate = text => {
    createTask(text)
      .then(newTask => {
        this.setState(prevState => ({
          tasks: [...prevState.tasks, newTask],
        }));
      })
      .catch(err => {
        this.setState({ error: 'Failed to create task' });
        console.error('Create error:', err);
      });
  };

  handleToggle = id => {
    const taskToUpdate = this.state.tasks.find(task => task.id === id);
    if (!taskToUpdate) return;

    const updatedTask = { ...taskToUpdate, done: !taskToUpdate.done };
    updateTask(id, updatedTask)
      .then(result => {
        this.setState(prevState => ({
          tasks: prevState.tasks.map(task => (task.id === id ? result : task)),
        }));
      })
      .catch(err => {
        this.setState({ error: 'Failed to update task' });
        console.error('Update error:', err);
      });
  };

  handleDelete = id => {
    deleteTask(id)
      .then(() => {
        this.setState(prevState => ({
          tasks: prevState.tasks.filter(task => task.id !== id),
        }));
      })
      .catch(err => {
        this.setState({ error: 'Failed to delete task' });
        console.error('Delete error:', err);
      });
  };

  render() {
    const { tasks, loading, error } = this.state;

    if (loading) {
      return <div className="loading">Loading...</div>;
    }

    if (error) {
      return (
        <div className="error">
          <p>{error}</p>
          <button onClick={this.loadTasks} className="btn">
            Retry
          </button>
        </div>
      );
    }

    return (
      <div id="root">
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTask onCreate={this.handleCreate} />
          <TasksList tasks={tasks} onToggle={this.handleToggle} onDelete={this.handleDelete} />
        </main>
      </div>
    );
  }
}

export default App;
