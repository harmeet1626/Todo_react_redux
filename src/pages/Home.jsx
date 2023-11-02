import ListTodo from './ListTodo'
import AddTodo from './AddTodo'
function Home() {

    return (
        <div>
            <h1>This is todo app</h1>
            <AddTodo />
            <ListTodo />
        </div>
    )
}
export default Home