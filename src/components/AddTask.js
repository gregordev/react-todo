import React from 'react';

class AddTask extends React.Component {
    state = {
        error: undefined
    };
    render() {
        const addTask = (e) => {
            e.preventDefault();
            const addedTask = e.target.elements.taskInput.value.trim();
            const error = this.props.addTask({content: addedTask, completed: false});

            this.setState(() => {
                return {error};
            });
        };
        return (
          <div>
              {this.state.error && <p className="add-option-error">{this.state.error}</p>}
              <form onSubmit={addTask}>
                  <input type="text" name="taskInput"/>
                  <button>Add task</button>
              </form>
          </div>
        );
    }
}

export {AddTask};