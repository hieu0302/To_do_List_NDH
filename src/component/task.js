const Task = (props) =>{
    const {inputTask, idTask} = props || {};
    return(
        <div>
             <input type="radio" id={idTask} ></input>
             <label for={idTask}>{inputTask}</label>
        </div>
    )

}

export default Task;