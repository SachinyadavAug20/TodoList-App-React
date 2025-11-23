import { useState } from 'react'
import './output.css'
import Navbar from './components/Navbar'
import './my.css'


function App() {
    const [addedtask, setaddetask] = useState("")
    const [tasks, setTasks] = useState([])//here all our todos lie
    const [rerender,setRerender]=useState(true);
    function handleEdit() {

    }
    function handleDelete() {

    }
    function handleAdd() {
        setTasks([...tasks, { addedtask, isComplete: false ,id:Math.round(Math.random()*762.32+Math.random()*12830/302+Math.random()*24321/13.14159 -Math.random()*6962/65.256+Math.random()*10000+Math.random()*100000+Math.random()*1000000)}])
        setaddetask("")
        console.log(tasks)
    }


    return (
        <div className='bg-slate-900 text-black font-sans h-[100vh]'>
            <Navbar />
            <div className='bg-slate-500 p-5 text-center border-gray-300 rounded-3xl border-[0.5px] Main_page_for_todo_list ml-20 my-6 w-[91.5%] box-border min-h-[50vh] overflow-auto'>

                <div className='input_of_todo flex gap-3 flex-col'>

                    <span className=' text-xl font-semibold justify-self-start shadow-transparent'>Add new task</span>
                    <div className='flex items-center gap-0 justify-center'>
                        <input className='pl-4 py-2 w-[50%] outline-black outline rounded-tl-3xl hover:rounded-bl-3xl rounded-r-0 hover:rounded-t-[0px] focus:rounded-tl-xl focus:rounded-bl-3xl focus:outline-blue-700 focus:outline-[3px] text-lg font-mono' type="text" placeholder={"Add a task"} onChange={(e) => { setaddetask(e.target.value) }} name="usrTodoAdded" value={addedtask} />
                        <button onClick={handleAdd} type="button" className='bg-blue-600 border-[4px] border-black rounded-r-full px-2 py-0 text-4xl hover:text-white hover:bg-green-600 hover:scale-[105%] scale-105 transition-transform duration-250'>+</button>
                    </div>
                </div>

                <div className='todos flex-col flex px-3 justify-center items-start gap-3 border-gray-300 border py-5 bg-slate-400 rounded-3xl my-6'>
                    <span className='px-15 py-5 text-2xl font-bold'>Your todos :-</span>
                    {tasks.map((todo) => {

                        return <div key={todo.id} className='todo flex gap-3 w-[80%] bg-blue-500 rounded-xl border border-gray-300 justify-between hover:bg-blue-600 place-self-center px-5 transition-all duration-300 py-2'>
                            <div className='flex gap-3 justify-center items-center'>
                                <div className='check_box'>
                                    <input className='scale-[165%] border-[2px] border-gray-500 accent-green-400' onChange={(e)=>{if(e.target.checked){todo.isComplete=true;setRerender(!rerender)}else{todo.isComplete=false;setRerender(!rerender)}}} type="checkbox" name="" value="" />
                                </div>
                                <div className={todo.isComplete?'line-through descOfTodo text-balance text-lg':'descOfTodo text-balance text-lg'}>
                                    {todo.addedtask}                               </div>
                            </div>
                            <div className='optios flex gap-5 text-white'>
                                <button onClick={handleEdit} className='bg-blue-800 px-2 py-1 transition-all duration-150 hover:bg-green-600 hover:font-semibold border rounded-lg' type="button">Edit</button>
                                <button onClick={handleDelete} className='bg-blue-800 px-2 py-1 htransition-all duration-150 hover:bg-green-600 hover:font-semibold border rounded-lg' type="button">Delete</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default App
