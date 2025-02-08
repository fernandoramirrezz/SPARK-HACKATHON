import { useState} from "react";
import Component2 from "./Component2";
import Form from "./Form";
import TodoList from "./TodoList";
//First Component creates Task bar (type in) for Default Todo App
export default function Component1() {
  const [todos,setTodos]=useState([]);
  //set variable todo to be set by function setTodo--> this will store the value user inputs in task bar in variable todo
  //"" is empty because there is no text in taskbar

  //todos stores all todos in a list, todos is to be set by function setTodo

  //<div> Basic Header
  //<form> --> create taskBar
  //<input type="text" /> --> entry in task bar is text
  //<button type="submit" /> -->create submit button
  //include text inbetween > </...>

  //Allows user to catch the user's input with e and the call setTodo to set todo's value with e
  //onChange={(e) => setTodo(e.target.value)}
  //value = {todo}

  //<form onSubmit={handleSubmit}> --> submission

  return (
    <div>
      <Form todos= {todos} setTodos={setTodos}/>
      <TodoList todos={todos}/>
    </div>

  //{todos.map((item) => (
  //  <Component2 key={item} item = {item}/>
  // ))}
  //list component of todos, list is Component two, 
  );
}

