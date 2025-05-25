

function Task() {

    const tasks = ['Sweep', "Mop", "Wash"];

    return (
        <>

        {/* Add Task
            ~Input field to type a new task.
            ~"Add" button to add the task to the list. 
        */}

        <label>
            Task: <input name="myTasks" />
        </label>
        <button>Add</button>
        <hr />

        {/* Display Task List:
                -Render all tasks below the input.
                -Each task should have:
                    -Task text.
                    -A "Delete" button to remove it.
                    -A "Complete" button that marks it as completed (toggle). 
        */}

        <ul>
            {tasks.map((item, index) => (
                <li key={index}>
                    {item}
                    <button>Delete</button>
                    <button>Complete</button>
                </li>
            ))}
        </ul>

        </>
    )

}

export default Task