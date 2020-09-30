import './style.css';

import { TodoList } from './classes/todo-list.js'; 
import { Todo } from './classes/todo.class.js';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

/* const tarea = new Todo('Aprender js');



todoList.nuevoTodo(tarea);


console.log(todoList);

crearTodoHtml( tarea );
 */

//localStorage.setItem('my-key', '')

todoList.todos.forEach(todo => crearTodoHtml(todo));