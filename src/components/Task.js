import React from 'react';

class Task extends React.Component {

    state = {
      content: this.props.content,
      completed: false
    };

    componentWillReceiveProps(nextProps) {
            this.setState({
                content: nextProps.content,
                completed: nextProps.completed
            })
    };

    render() {
        const removeTask = () => {
            const elementToRemove = this.state;
            this.props.removeTask(elementToRemove);
            console.log(elementToRemove);
        };

        const setCompleted = () => {

            const toCompleted = {content: this.state.content, completed: !this.state.completed};
            this.props.setCompleted(toCompleted);
        };

        return (
          <div>
              {this.props.content}
              <button onClick={removeTask}>Remove me</button>
              <input type="checkbox" onChange={setCompleted}/>
              {this.props.completed ? "Completed" : "Not completed"}
          </div>
        );
    }
}

export {Task};