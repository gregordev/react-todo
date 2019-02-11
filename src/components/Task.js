import React from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

class Task extends React.Component {

    state = {
      content: this.props.content,
      completed: false
    };

    componentWillMount() {
        let completed = this.state.completed;
        this.setState({completed})
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('xxxx');
    }

    render() {
        const removeTask = () => {
            const elementToRemove = this.state;
            this.props.removeTask(elementToRemove);
            console.log(elementToRemove);
        };

        const setCompleted = () => {

            const toCompleted = {content: this.state.content, completed: !this.props.completed};
            this.props.setCompleted(toCompleted);
        };

        return (
          <div className="task-container">
              <p>
                  <DeleteOutlinedIcon onClick={removeTask}/>
              </p>
              <p className="task-content">
                  {this.props.content}
              </p>
              <div>
                  <input type="checkbox" onChange={setCompleted} checked={this.props.completed}/>
              </div>
              <p className="task-completed">
                  {this.props.completed ? "Completed" : "Not completed"}
              </p>
          </div>
        );
    }
}

export {Task};