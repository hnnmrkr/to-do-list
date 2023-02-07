const TasksFilter = (props) => {
    const selectPriorityHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by priority</label>
                <select onChange={selectPriorityHandler}>
                    <option value="All">All</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
        </div>
    );
};

export default TasksFilter