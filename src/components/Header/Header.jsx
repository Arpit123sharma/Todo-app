import React from 'react'

function Header({
    label,
    img1,
    img2,
    color = "bg-white",
    margin = "my-0",
    func1,
    func2
}) {
  return (
    <div className={`flex w-full h-auto p-5 justify-between ${color} ${margin}`}>
           <img src={img1} alt="kuch nhi hai" className='cursor-pointer' onClick={()=>func1 && func1()}/>
           <h1>{label}</h1>
           <img src={img2} alt="kuch nhi" className='cursor-pointer' onClick={()=> func2 && func2()}/>
    </div>
  )
}

export default Header