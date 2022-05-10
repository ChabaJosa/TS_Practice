import axios from "axios";
//
const url = "https://jsonplaceholder.typicode.com/todos/1";
//
axios.get(url).then((response) => {
//   console.log(response.data);
  const todo = response.data
  console.log(`The user id is ${todo.userId}, the id is ${todo.id} for ${todo.title} and it ${todo.completed ? "has" :"has not"} been completed.`)
});
