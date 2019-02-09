import React from 'react';

class Task extends React.Component {

    state = {
      content: this.props.content,
      completed: false
    };

    componentWillReceiveProps(nextProps) {
            this.setState({
                content: nextProps.content
            })
    };

    render() {
        const removeTask = () => {
            const elementToRemove = this.state;
            this.props.removeTask(elementToRemove);
        };

        return (
          <div>
              {this.props.content}
              <button onClick={removeTask}>Remove me</button>
          </div>
        );
    }
}

export {Task};