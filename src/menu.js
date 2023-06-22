import Task from "./component/task";
const Menu = () =>{
    return (
        <div className = 'menu'>
            <div className="header_input">
            <input placeholder="Enter your task here..."></input>
            <button>Add</button> 

            </div>
            <div className="task">
                <form>
                <Task
                 inputTask = 'Đi ngủ'
                 idTask = 'task1'
                />
                 <Task
                 inputTask = 'Đi ngủ'
                 idTask = 'task2'
                />
                 <Task
                 inputTask = 'Đi chơi'
                 idTask = 'task3'
                />
                 <Task
                 inputTask = 'Đi ngủ'
                 idTask = 'task4'
                />
                </form>
                
            </div>
            <div className="footer">
                <div className="task_left"> 
                    5 tasks left!

                </div>
                <div>
                    Mindx todolist
                </div>
                   
                


            </div>
           
        </div>
    );
};

export default Menu;