


export const TaskReducer = (state={taskBox:[]}, action)=>{
switch(action.type){
    case "ADD_TASK":
        return{taskBox:action.payload};
    case "REMOVE_TASK":
        return { taskBox: action.payload};
        default:
            return state;
}
}