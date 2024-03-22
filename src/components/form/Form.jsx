import React from 'react'

function Form({
    func,
    date,
    func1,
    func2,
    func3,
    content,
    addTodo
}) {

  return (
    <div className={ ` w-6/12 h-2/3 absolute text-xl bg-blue-400 rounded-xl`}>
       <h1 className='text-center text-2xl'>{date}</h1>
       <br />
        <div className='p-7'>
        <label htmlFor="task">Task:</label><br />
       <textarea name="task"  cols="25" rows="2" className='block' onChange={(e)=>func1(e.target.value)}></textarea>
       <label htmlFor="from">From:</label>
       <input type="text" name="from"  className='block' onChange={(e)=>func2(e.target.value)}/>
       <label htmlFor="To">To:</label>
       <input type="text" name="To"  className='block' onChange={(e)=>func3(e.target.value)}/>
        </div>
       <br />
      <button onClick={()=>func && func() || content()|| addTodo()} className='border border-solid border-black p-4 rounded-full w-2/12 bg-white text-2xl'>Save</button>
    </div>
  )
}

export default Form