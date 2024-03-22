import React from 'react'

function Content({
    from,
    to,
    task,
    remove
}) {
  return (
    <div className='w-full flex justify-center items-center m-3'>
       <div className='w-1/5 p-4 text-xl'>
         <h2>{from}</h2>
         <h1>To</h1>
         <h2>{to}</h2>
       </div>
       <div className='w-full flex justify-center items-center'>
          <h3>{task}</h3>
       </div>
       <div className='w-full flex justify-center items-center'>
        <button className='border border-solid border-black rounded-full p-3' onClick={remove}>Remove</button>
       </div>
    </div>
  )
}

export default Content