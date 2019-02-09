import React from 'react';
import {AddTask} from './AddTask';
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

        const setCompleted = (elementToComplete) => {
            console.log(elementToComplete.completed);
            const stateCopy = JSON.parse(JSON.stringify(this.state.tasks));
            const id = this.state.tasks.findIndex((element) => {
                return element.content === elementToComplete.content;
            });
            stateCopy[id] = elementToComplete;
            this.setState({
                tasks: stateCopy
            });
        };

        let taskContents = [];
        const addTask = (element) => {

            for (let i =0; i < this.state.tasks.length; i++) {
                taskContents.push(this.state.tasks[i].content.toLowerCase());
            }
            if (!element.content) {
                return 'Enter valid value to add item';
            } else if (taskContents.indexOf(element.content.toLowerCase()) > -1) {
                return 'This option already exists'
            }

          this.setState((prevState) => ({
              tasks: prevState.tasks.concat([element])
          }));
        };

        return (
          <div>
              <TaskList
                  tasks={this.state.tasks}
                  removeTask={removeTask}
                  setCompleted={setCompleted}
              />
              <AddTask
                  addTask={addTask}
              />
          </div>
        );
    }
}

export {TodoApp};