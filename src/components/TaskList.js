import React from 'react';
import {Task} from './Task';

class TaskList extends React.Component {
    render() {
        return (
            <div>
                {this.props.tasks.map((task) => {
                    return <Task
                        key={task.content}
                        content={task.content}
                        completed={task.completed}
                        removeTask={this.props.removeTask}
                        setCompleted={this.props.setCompleted}
                    />;
                })}
            </div>
        )
    }
}

export {TaskList};