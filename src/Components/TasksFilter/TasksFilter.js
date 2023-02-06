const TasksFilter = (props) => {
    const selectPriorityHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by priority</label>
                <select onChange={selectPriorityHandler}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
        </div>
    );
};

export default TasksFilter