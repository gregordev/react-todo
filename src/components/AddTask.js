import React from 'react';

class AddTask extends React.Component {

    render() {
        const addTask = (e) => {
            e.preventDefault();
            const addedTask = e.target.elements.taskInput.value.trim();
            this.props.addTask({content: addedTask, completed: false});
        };
        return (
          <div>
              <form onSubmit={addTask}>
                  <input type="text" name="taskInput"/>
                  <button>Add task</button>
              </form>

          </div>
        );
    }
}

export {AddTask};