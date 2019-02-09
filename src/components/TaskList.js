import React from 'react';
import {Task} from './Task';
import {FilterTask} from "./FilterTask";

class TaskList extends React.Component {
    state = {
      filters: "",
        filteredTasks: this.props.tasks
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            filters: nextProps.filters,
            filteredTasks: nextProps.tasks
        })
    }

    render() {
        const filterTasks = (e) => {
            console.log(e);
            this.setState({
                filters: e.toLowerCase(),
                filteredTasks: this.props.tasks.filter((item) => {
                    return item.content.toLowerCase().includes(e);
                })
            })
        };
        return (
            <div>
                {this.state.filteredTasks.map((task) => {
                    return <Task
                        key={task.content}
                        content={task.content}
                        completed={task.completed}
                        removeTask={this.props.removeTask}
                        setCompleted={this.props.setCompleted}
                    />;
                })}
                <FilterTask
                    tasks={this.props.tasks}
                    filterTasks={filterTasks}/>
            </div>
        )
    }
}

export {TaskList};