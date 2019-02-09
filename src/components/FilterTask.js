import React from 'react';

class FilterTask extends React.Component {

    state = {
      filters: ""
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            filters: nextProps.filters
        })
    };


    render() {

        const filterTasks = (e) => {
            const newFilters = e.target.value.trim();
            this.props.filterTasks(newFilters);
            this.setState({
                filters: newFilters
            })
        };

        return (

            <div>
                <input type="text" onChange={filterTasks}/>
            </div>
        )
    }
}

export {FilterTask};