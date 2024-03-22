import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/form/Form';
import { getCurrentDate, increaseDate } from './Hooks/Date';
import Content from './components/Content/Content';

function App() {
  const [renderState, setRenderState] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [days, setDays] = useState(0);
  const [task, setTask] = useState("")
  const [from,setFrom]  = useState("")
  const [to, setTo] = useState("")
  const [contRender,setContRender] = useState(false)
  const [todos, setTodos] = useState([]);
  const funcFrom = (value)=> setFrom(value);
  const funcTo = (value)=> setTo(value);
  const funcTask = (value)=> setTask(value);
  const functRemove = ()=> setContRender(!contRender)
  // Update currentDate whenever days changes
  useEffect(() => {
    setCurrentDate(increaseDate(getCurrentDate(), days));
  }, [days]);
  // const Todos=[]
  const addingTodo = ()=>{
    const obj = {
      Task:task,
      From:from,
      To:to,
      Remove:functRemove
    }
    setTodos(prevTodos => [...prevTodos, obj]);
    setTask("");
    setFrom("");
    setTo("");
  }
  const removeTodo = (index) => {
    setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
  };
  return (
    <div className='h-screen bg-green-300 flex justify-center items-center relative'>
      <div className='h-4/5 w-4/12 bg-white rounded-xl overflow-hidden'>
        <Header
          img1='./menu-fill.png'
          label='Todo App'
          img2='./add-line.png'
          func2={() => setRenderState(!renderState)}
        />
        <Header
          img1='./arrow-left-wide-fill.png'
          label={currentDate}
          img2='./arrow-right-wide-fill.png'
          margin='my-3'
          color='bg-slate-100'
          func2={() => setDays(prevDays => prevDays + 1)}
          func1={()=> setDays (prevDays => prevDays - 1)}
        />
        {/* {contRender && <Content task={task} from={from} to={to} remove={functRemove}/>} */}
        {todos.map((todo, index) => (
         <Content key={index} task={todo.Task} from={todo.From} to={todo.To} remove={() => removeTodo(index)} />
))}

      </div>
      {renderState && <Form func={() => setRenderState(!renderState)} date={currentDate} func1={funcTask} func2={funcFrom} func3={funcTo} content={functRemove} addTodo={addingTodo}/>}
    </div>
  );
}

export default App;




