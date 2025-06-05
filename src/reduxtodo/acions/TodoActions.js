


export const AddTaskAction = (taskText) =>(dispatch , getState) =>{
    const{
        Task:{taskBox},

    }= getState();

    const alreadyExists = taskBox.find((t) => t.task === taskText);

    if(!alreadyExists && taskText.trim() !== ''){
        dispatch({
            type:"ADD_TASK",
            payload:[{id:Date.now() , task:taskText} , ...taskBox],
        })
    }

}

export const RemoveTAskAction = (taskToRemove) =>(dispatch , getState) =>{
    const{
        Task:{taskBox}
    }= getState();

    dispatch({
        type:"REMOVE_TASK",
        payload: taskBox.filter((t)=> t.id !==taskToRemove.id )
    })
}