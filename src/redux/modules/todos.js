const initialState = {
    items: [
        {
            id: 1, // all id must be unique.
            title: "watch react lectures",
            body: "chapter 1 - chapter 12",
            isDone: false
        },
        {
            id: 2, // all id must be unique.
            title: "eat lunch",
            body: "what should I eat..?",
            isDone: false
        }
    ]
};

const ADD_TODO = 'personal-task/todos/ADD_TODO';
const UPDATE_STATUS_ITEM = 'personal-task/todos/UPDATE_STATUS_ITEM';
const DELETE_ITEM = 'personal-task/todos/DELETE_ITEM';
export const addTodo = toDo => ({ type: ADD_TODO, payload: toDo });
export const updateStatusItem = toDo => ({ type: UPDATE_STATUS_ITEM, payload: toDo });
export const deleteItem = toDo => ({ type: DELETE_ITEM, payload: toDo });

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                items: [
                    ...state.items,
                    {
                        id: +new Date(),
                        title: action.payload.title,
                        body: action.payload.body,
                        isDone: false,
                    },
                ]
            };
            // console.log(state)
        case UPDATE_STATUS_ITEM:
            return {
                items:[
                    ...state.items.map((todo) => {
                        if (todo.id === action.payload) {
                            return { ...todo, isDone: !todo.isDone };
                        }
                        return todo;
                    })]};
        case DELETE_ITEM:
            return {items:[...state.items.filter((todo) => todo.id !== action.payload)]}
        default:
            return state;
    }
}

export default reducer;