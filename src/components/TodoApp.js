import React from 'react';
import {AddTask} from './AddTask';
import {FilterTask} from "./FilterTask";
import {TaskList} from './TaskList';

class TodoApp extends React.Component {
    state = {
      tasks: [
          {
              content: "First task",
              completed: false
          },
          {
              content: "Second task",
              completed: false
          },
          {
              content: "Third task",
              completed: false
          }
      ]
    };
    render() {
        return (
          <div>
              <FilterTask/>
              <AddTask/>
              <TaskList/>
          </div>
        );
    }
}

export {TodoApp};