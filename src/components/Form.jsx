import { useState } from "react"
export default function Form({todos,setTodos}) {
    const [todo, setTodo] = useState("");

    function handleSubmit(e){
        //Prevents form from refreshing (forgetting data)
        e.preventDefault();
        //inserts current todo and all previous todos into a list
        setTodos([...todos,todo]);
        //taskBar is refreshed
        setTodo("");
    }

    return (
          <form onSubmit={handleSubmit}>
            <input 
              onChange={(e) => setTodo(e.target.value)}
              value = {todo}
              type="text" 
            />
            <button type="submit">Add</button>
          </form>
    );
}