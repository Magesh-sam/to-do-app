import React from 'react';
import TodoList from './components/ToDoList';
import './App.css'


function App() {
  return (
    <div className='todo-app'>
      <TodoList/>
      <br></br>
      <footer> &copy; created by <a href="https://mageshkannan.netlify.app/" target="_blank">Mageshkannan Annathurai</a></footer>
    </div>
   
  );
}

export default App;
