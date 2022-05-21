import axios from "axios";
//
const url = "https://jsonplaceholder.typicode.com/todos/1";
//
interface TodoResponse {
  userId: string;
  id:number;
  title:string;
  completed: boolean;
}
//
axios.get(url).then((response) => {
  //
  //    Our response has the following properties:
  //        { id, userId, title, completed }
  //
  //    To make sure we have correct spelling and there's no 
  //    undefined properties we will use an interface
  //
  const todo = response.data as TodoResponse
  console.log(`The user id is ${todo.userId}, the id is ${todo.id} for ${todo.title} and it ${todo.completed ? "has" :"has not"} been completed.`)
});
