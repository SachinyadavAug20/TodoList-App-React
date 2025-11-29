import { useState, useEffect } from 'react'
import './output.css'
import Navbar from './components/Navbar'
import './my.css'
import { v4 as uuidv4 } from 'uuid';
uuidv4();


function App() {
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [addedtask, setaddetask] = useState("")
    const [addedtaskplaceholder, setaddetaskphaceholder] = useState("Add a task");
    const [tasks, setTasks] = useState([])//here all our todos lie
    const [rerender, setRerender] = useState(true);
    const [savestate, setSavestate] = useState(false);
    const [hiddeCompletedTodos, setHiddeCompltedTodos] = useState(true);
    function saveToLocalStorage() {
        localStorage.setItem("Todos", JSON.stringify(tasks))//as localstorage can only have strings


    }

    useEffect(() => {
        if (localStorage.getItem("Todos")) {
            let todos = JSON.parse(localStorage.getItem("Todos"))//make strings to JSON
            console.log(todos)
            setTasks(todos);
        }
    }, [])


    function handleDelete(uuid) {
        let index = tasks.findIndex((e) => {
            return e.uuid == uuid;
        })
        setTasks(tasks.filter((e, i) => { return i != index }))
        saveToLocalStorage()
    }
    function handleAdd() {
        if (addedtask == "") {
            setaddetaskphaceholder("Enter a valid todo")
            saveToLocalStorage()
        }
        else {
            setaddetaskphaceholder("Add another task")
            setTasks([...tasks, { addedtask, isComplete: false, uuid: uuidv4(), id: Math.round(Math.random() * 762.32 + Math.random() * 12830 / 302 + Math.random() * 24321 / 13.14159 - Math.random() * 6962 / 65.256 + Math.random() * 10000 + Math.random() * 100000 + Math.random() * 1000000) }])
            setaddetask("")
            if (savestate) {
                setSavestate(false)
            }
            saveToLocalStorage()
        }
    }

    function handleEdit(e, uuid) {
        let index = tasks.findIndex((e) => {
            return e.uuid == uuid
        })
        let todo = tasks[index]
        todo.uuid = uuid;
        setaddetask(todo.addedtask)
        handleDelete(uuid)
        setSavestate(true)
        saveToLocalStorage()

    }


    return (
        <div className={isDarkMode ? 'bg-gradient-to-tr from-teal-600 to-zinc-700 text-black font-sans h-[100vh]' : 'bg-gradient-to-tr from-fuchsia-300 to-sky-300 text-black font-sans h-[100vh]'}>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <div className={isDarkMode ? 'bg-gradient-to-r from-green-900 to-emerald-900 p-3 sm:p-4 lg:p-5 text-center min-h-[80%] border-gray-300 rounded-xl sm:rounded-2xl lg:rounded-3xl border-[0.5px] Main_page_for_todo_list mx-2 sm:mx-4 lg:ml-20 my-3 sm:my-4 lg:my-6 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] lg:w-[91.5%] box-border overflow-auto pb-1' : 'bg-gradient-to-r from-teal-400 to-blue-300 p-3 sm:p-4 lg:p-5 text-center min-h-[80%] border-gray-900 rounded-xl sm:rounded-2xl lg:rounded-3xl border-[0.5px] Main_page_for_todo_list mx-2 sm:mx-4 lg:ml-20 my-3 sm:my-4 lg:my-6 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] lg:w-[91.5%] box-border overflow-auto pb-1'}>

                <div className='input_of_todo flex gap-2 sm:gap-3 flex-col'>
                    <span className={isDarkMode ? 'text-lg sm:text-xl lg:text-2xl font-semibold text-white justify-self-start shadow-transparent' : 'text-lg sm:text-xl lg:text-2xl font-semibold text-black justify-self-start shadow-transparent'}>Add new task</span>
                    <div className='flex items-center gap-0 justify-center'>
                        <input className='pl-3 sm:pl-4 py-1 sm:py-2 w-full sm:w-[70%] lg:w-[50%] outline-black outline rounded-tl-xl sm:rounded-tl-2xl lg:rounded-tl-3xl hover:rounded-bl-xl sm:hover:rounded-bl-2xl lg:hover:rounded-bl-3xl rounded-r-0 hover:rounded-t-[0px] focus:rounded-tl-lg sm:focus:rounded-tl-xl lg:focus:rounded-tl-xl focus:rounded-bl-xl sm:focus:rounded-bl-2xl lg:focus:rounded-bl-3xl focus:outline-blue-700 focus:outline-[2px] sm:focus:outline-[3px] text-base sm:text-lg font-mono' type="text" placeholder={addedtaskplaceholder} onChange={(e) => { setaddetask(e.target.value) }} name="usrTodoAdded" value={addedtask} />
                        <button onClick={handleAdd} type="button" className={savestate ? 'bg-blue-600 hover:absolute hover:w-[90%] sm:hover:w-[70%] lg:hover:w-[50%] hover:rounded-xl sm:hover:rounded-2xl lg:hover:rounded-3xl border-[2px] sm:border-[3px] lg:border-[4px] border-black rounded-r-lg sm:rounded-r-xl lg:rounded-r-full px-2 sm:px-3 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 py-1 disabled:bg-red-800 hover:text-white hover:bg-green-500 hover:scale-[105%] sm:hover:scale-[110%] lg:hover:scale-[120%] scale-100 sm:scale-105 transition-transform duration-250' : 'bg-blue-600 hover:absolute hover:w-[90%] sm:hover:w-[60%] lg:hover:w-[45%] hover:rounded-xl sm:hover:rounded-2xl lg:hover:rounded-3xl border-[2px] sm:border-[3px] lg:border-[4px] border-black rounded-r-lg sm:rounded-r-xl lg:rounded-r-full px-2 sm:px-3 py-0 text-2xl sm:text-3xl lg:text-4xl hover:text-white hover:bg-green-500 hover:scale-[105%] sm:hover:scale-[110%] lg:hover:scale-[120%] scale-100 sm:scale-105 transition-transform duration-250'}>{savestate ? 'Save' : '+'}</button>
                    </div>
                </div>

                <div className={isDarkMode?" bg-gradient-to-tr from-slate-600 to-stone-800 border border-gray-300 mt-5 rounded-xl sm:rounded-2xl lg:rounded-3xl ":" bg-gradient-to-tr from-rose-300 to-sky-300 mt-5 border-gray-900 border rounded-xl sm:rounded-2xl lg:rounded-3xl "}><div className={tasks.length == 0 ? 'todos flex-col flex px-2 sm:px-3 justify-center items-start gap-2 sm:gap-3 min-h-[50vh] py-3 sm:py-5  rounded-xl sm:rounded-2xl lg:rounded-3xl my-3 sm:my-4 lg:my-6' : 'todos  flex-col flex px-2 sm:px-3 justify-center items-start gap-2 sm:gap-3 py-3 sm:py-5 rounded-xl sm:rounded-2xl lg:rounded-3xl my-3 sm:my-4 lg:my-6'}>
                    {tasks.length != 0 && <div className='flex flex-col sm:flex-row w-[100%] justify-between px-2 sm:px-10 lg:px-40 gap-2 sm:gap-0'>
                        <span className='px-2 sm:px-4 lg:px-15 py-2 sm:py-3 lg:py-5 text-lg sm:text-xl lg:text-2xl text-white place-self-start justify-self-start font-bold'>Your todos :-</span>
                        <div className={hiddeCompletedTodos ? 'px-2 sm:px-6 lg:px-12 flex gap-2 sm:gap-3 justify-center font-bold text-green-800 items-center drop-shadow-2xl shadow-white' : 'px-2 sm:px-6 lg:px-12 font-bold text-gray-200 flex gap-2 sm:gap-3 justify-center items-center'}>
                            <input className='scale-[140%] sm:scale-[150%] lg:scale-[170%] text-green-500 font-bold accent-lime-300' type="checkbox" onClick={() => {
                                setHiddeCompltedTodos(!hiddeCompletedTodos)
                            }} name="showFinsihed" checked={hiddeCompletedTodos} />
                            <div className='text-sm sm:text-base lg:text-lg'>Show All</div>
                        </div>
                    </div>
                    }
                    {tasks.length == 0 && <div className='px-2 flex flex-col gap-1 justify-center w-[100%] h-[100%] items-center'>
                        <div className='text-gray-800 text-xl sm:text-2xl lg:text-4xl font-mono font-semibold text-center'>No todo to display </div>
                        <div className='text-sm sm:text-base lg:text-lg font-mono font-thin text-gray-500 text-center'>Add some todos to your plan</div>
                    </div>}
                    <div className='h-[50vh] overflow-auto w-full flex flex-col gap-3'>

                        {tasks.map((todo) => {
                            return (hiddeCompletedTodos || !todo.isComplete) && <div key={todo.id} className={isDarkMode?'todo flex flex-col sm:flex-row gap-2 sm:gap-3 w-[95%] sm:w-[90%] lg:w-[80%] bg-gradient-to-l from-blue-600 to-sky-600 rounded-lg sm:rounded-xl border border-gray-300 justify-between hover:to-blue-800 hover:from-sky-800 place-self-center px-3 sm:px-4 lg:px-5 transition-all duration-300 text-white py-2 sm:py-3': 'todo text-black bg-gradient-to-l from-blue-300 to-sky-300 flex flex-col sm:flex-row gap-2 sm:gap-3 w-[95%] hover:to-blue-500 hover:from-sky-500 sm:w-[90%] lg:w-[80%] rounded-lg sm:rounded-xl border border-gray-900 justify-between hover:bg-blue-600 place-self-center px-3 sm:px-4 lg:px-5 transition-all duration-300 py-2 sm:py-3'}>
                                <div className='flex gap-2 sm:gap-3 justify-center items-center w-full sm:w-auto'>
                                    <div className='check_box'>
                                        <input className='scale-[140%] sm:scale-[150%] lg:scale-[165%] border-[2px] border-gray-500 accent-green-400' onChange={(e) => { if (e.target.checked) { todo.isComplete = true; setRerender(!rerender) } else { todo.isComplete = false; setRerender(!rerender) } }} type="checkbox" name="" value="" />
                                    </div>
                                    <div className={todo.isComplete ? 'line-through font-semibold descOfTodo text-gray-700 text-balance text-sm sm:text-base lg:text-lg break-words w-full' : 'descOfTodo font-semibold  text-balance text-sm sm:text-base lg:text-lg break-words w-full'}>
                                        {todo.addedtask}
                                    </div>
                                </div>
                                <div className='optios flex gap-2 sm:gap-3 lg:gap-5 text-white justify-end sm:justify-start mt-2 sm:mt-0'>
                                    <button onClick={(e) => { handleEdit(e, todo.uuid) }} className='bg-blue-800 px-12 font-normal sm:px-3 py-1 text-sm sm:text-base transition-all duration-150 hover:bg-green-600 hover:font-semibold border rounded-md sm:rounded-lg' type="button">Edit</button>
                                    <button onClick={() => { handleDelete(todo.uuid) }} className='bg-blue-800 px-2 sm:px-3 py-1 text-sm sm:text-base transition-all duration-150 hover:bg-green-600 hover:font-semibold border rounded-md sm:rounded-lg' type="button">Delete</button>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default App
