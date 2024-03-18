let tasks = [
    // {
    //     title:'readQuran',
    //     date:'15/5/2024',
    //     isDone:true,
    // },
    // {
    //     title:'readQuran',
    //     date:'15/5/2024',
    //     isDone:true,
    // },
]
if(localStorage.getItem('tasks')!=null){
    tasks = JSON.parse(localStorage.getItem('tasks'))
}else{
    tasks=[]
}
display()
function display(){
    document.getElementById('tasks').innerHTML='';
    for (let task = 0; task < tasks.length; task++) {
        let content =
    `
    <!-- TASKS -->
    <div id="tasks" class="tasks">
    <!-- TASK -->
            <div class="task ${tasks[task].isDone ? 'done' : ''}">
                <!-- TASK INFO -->
                <div style="width: 70%;">
                    <h2>${tasks[task].title}</h2>
                    <div>
                        <span class="material-symbols-outlined">
                            calendar_month
                        </span>
                        <span>
                            ${tasks[task].date}
                        </span>
                    </div>
                </div>
                <!-- END TASK INFO -->
                <!-- TASK ACTIONS -->
                <div style="display: flex; justify-content: space-between; align-items: center; width: 20%;">
                    <button onclick='deleteTask(${task})' class="circular" style="background-color: rgb(114, 0, 0); color: white;">
                        <span class="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                    ${tasks[task].isDone ? 
                    `
                    <button onclick='complition(${task})' class="circular" style="background-color: rgb(133, 41, 41); color: white;">
                        <span class="material-symbols-outlined">
                            close
                        </span>
                    </button>

                    ` : 
                    `
                    <button onclick='complition(${task})' class="circular" style="background-color: rgb(0, 150, 30); color: white;">
                        <span class="material-symbols-outlined">
                            done
                        </span>
                    </button>
                    `}
                    

                    <button onclick='editTask(${task})' class="circular" style="background-color: rgba(0, 16, 197, 0.692); color: white;">
                        <span class="material-symbols-outlined">
                            edit
                        </span>
                    </button>
                </div>
                <!-- END TASK ACTIONS -->
            </div>
            <!-- END TASK -->

        </div>
        <!-- END TASKS -->
    `
    document.getElementById('tasks').innerHTML+=content
    }
}
display()
document.getElementById('add-btn').addEventListener('click',function(){
    let newTitle = prompt('add new task');
    let nowDate = new Date();
    let date = nowDate.getHours() +':'+nowDate.getMinutes()+'|'+nowDate.getDate()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getFullYear();
    let task ={
        title:newTitle,
        date:date,
        isDone:false,
    }
    tasks.push(task);
    local()
    display()
})
function deleteTask(index){
    tasks.splice(index,1);
    local();
    display()

}
function editTask(index){
    let newTask = prompt('are you sure to edit : '+tasks[index].title  ,tasks[index].title)
    tasks[index].title=newTask;
    local()
    display()
}
function complition(index){
    tasks[index].isDone = !tasks[index].isDone;
    local()
    display()
}
function local(){
    let stringTask =JSON.stringify(tasks)
    localStorage.setItem('tasks',stringTask)
}

