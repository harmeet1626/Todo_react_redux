import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../store/todos";
function AddTodo() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('')
    function addTodos() {
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <div>
            <input placeholder="Write todo here" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => addTodos()}>Add</button>
        </div>
    )
}
export default AddTodo