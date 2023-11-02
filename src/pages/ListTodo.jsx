import { UseSelector, useSelector, useDispatch } from "react-redux"
// import todos from "../store/todos"
import { deleteTodo, completed } from "../store/todos"

const ListTodo = () => {
    const dispatch = useDispatch()
    const todo = useSelector((state) => state.todo.value)
    function removeTodo(index) {
        console.log(index)
        dispatch(deleteTodo(index))
    }
    function completeTodo(index){
        dispatch(completed(index))
    }
    return (
        <div>
            <h1>Todolist</h1>
            <ul>
                {todo.map((todo, index) => (
                    <div key={index}>
                        <li>{todo.todo} & Todo done{todo.done ? " True" : " False"}</li>
                        <button onClick={() => removeTodo(index)}>Delete</button>
                        <button onClick={()=> completeTodo(index)}>Toggle Completed</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}
export default ListTodo