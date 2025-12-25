//Creating a react component that takes todos as an input and renders then sleect typescript while initializing the react project using npm create vite@latest

//todo.tsx

// this file will run after setting up the react and putting the file under app.tsx selecting typescript as the language while running command : npm create vite@latest. Refer this repo : https://github.com/Shivam30Mishra/React-Component-using-Typescript

//custom type
interface TodoType {
  title: string,
  description: string,
  done: boolean
}

interface TodoInput {
  todo: TodoType
}

function Todo({todo}: TodoInput){
  return <div>
    <h1> {todo.title} </h1>
    <h2> {todo.description} </h2>
  </div>
}