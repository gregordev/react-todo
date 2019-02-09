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
        const removeTask = (elementToRemove) => {
            this.setState((prevState) => ({
                tasks: prevState.tasks.filter((element) => {
                    return element.content !== elementToRemove.content;
                })
            }));
        };


        const addTask = (element) => {
          this.setState((prevState) => ({
              tasks: prevState.tasks.concat([element])
          }));
        };

        return (
          <div>
              <FilterTask/>
              <AddTask
                addTask={addTask}
              />
              <TaskList
                  tasks={this.state.tasks}
                  removeTask={removeTask}
              />
          </div>
        );
    }
}

export {TodoApp};