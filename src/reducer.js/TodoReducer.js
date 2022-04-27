const initiaData = {
    list: []
}
const TodoReducer = (state = initiaData, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }]
            }
        case "DELETE_NOTE":
         const newlist =  state.list.filter((element)=> element.id !==action.id)
            return {
                ...state,
               list:newlist
            }
        case "DELETE_ALL_NOTE":return {
                ...state,
               list:[]
            }
            default: return state;
    }

}
export default TodoReducer;