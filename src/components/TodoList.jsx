import Component2 from "./Component2";
export default function TodoList({todos}) {

    return <div>
        {todos.map((item) => (
        <Component2 key={item} item = {item}/>
      ))}

    </div>;
}