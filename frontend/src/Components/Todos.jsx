import { memo } from "react";
const Todos = ({ todos, addTodo }) => {
    alert("Todos component re-render");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
        </>
    );
};
export default memo(Todos);
