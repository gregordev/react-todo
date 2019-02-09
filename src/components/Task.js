import React from 'react';

class Task extends React.Component {

    state = {
      content: undefined,
      completed: undefined
    };

    componentWillReceiveProps(nextProps) {
            this.setState({
                content: nextProps.content
            })
    };

    render() {
        const removeItem = () => {
            console.log('remove item');
            this.props.removeTask();
        };

        return (
          <div>
              {this.props.content}
              <button onClick={removeItem}>Remove me</button>
          </div>
        );
    }
}

export {Task};