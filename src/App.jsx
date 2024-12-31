import React, { useRef, useState } from 'react'

const App = () => {
    const [task, settask] = useState("")
    const [arrtask, setarrtask] = useState([])

    let ref=useRef();
    
    const handleChange=(e)=>{
        settask(e.target.value);
    }

    const handleClick=(i)=>{
        const copyarr=[...arrtask];
        copyarr.splice(i,1)
        setarrtask(copyarr);
    }

    
    const handleSubmit=(e)=>{
        e.preventDefault();
        setarrtask([...arrtask,{task}]);
        settask("");
        // localStorage.getItem(task);
        
        
    }
    let renderTask=<h2 className='text-2xl'>No Todo's Available!!</h2>;

   
    let netask=arrtask.map((todo,i)=>{
        return <li  key={i} {...localStorage.getItem(i,todo.task)} className='mx-auto bg-black  flex justify-between items-center m-1 text-white'>
            <h2 className='m-2 text-xl '>{todo.task} </h2>
            <button onClick={()=>{handleClick(i)}} {...localStorage.removeItem(i)} className='border-black border-2  rounded-md px-2 bg-red-500 text-black font-semibold hover:scale-105 transition-all'>Delete</button>
            
        </li>
         
    })

    // console.log(netask.length);
    
    
    return (
        <>
            <h1 className='bg-black text-white text-center p-2 text-2xl'>iTask -Your Task Planner</h1>
            <form onSubmit={handleSubmit} className='text-center w-full '>
                <input ref={ref} type="text" value={task} onChange={handleChange} placeholder="Enter Task" className=' text-xl w-1/3 border-zinc-800 border-2 m-5 px-2 py-1 rounded-md' />
                <button className='text-xl border-2 border-zinc-900 px-2 py-1 rounded-md bg-red-500'>Add Task</button>
            </form>
            <hr/>
            <div className="flex justify-center items-center p-4 w-full"><ul className='w-1/2'>{netask.length>0?netask:renderTask}</ul></div>
        </>
    )
}

export default App