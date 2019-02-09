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
                <div>
                    {this.props.tasks.length > 0 && <div><FilterTask tasks={this.props.tasks} filterTasks={filterTasks}/></div>}
                </div>
                {this.props.tasks.length > 0 ? <div>{this.state.filteredTasks.length > 0 ? this.state.filteredTasks.map((task) => {
                    return <Task
                        key={task.content}
                        content={task.content}
                        completed={task.completed}
                        removeTask={this.props.removeTask}
                        setCompleted={this.props.setCompleted}
                    />;
                }) : <p>Brak wyników!</p>}</div> : <p>Dodaj zadanie!</p>}
            </div>

        )
    }
}

export {TaskList};