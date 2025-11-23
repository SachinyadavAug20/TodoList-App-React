import { useState } from "react"

const Navbar=()=>{
    const [mode, setMode] = useState("dark")
    const [bgColor,setBgColor]=useState("rgb(22, 22, 23)");
    const [Color,setColor]=useState("white");

    return (
    <div style={{backgroundColor:bgColor,color:Color}} className="transition-all border-gray-300 border-t-0 border rounded-b-3xl duration-150">
            <nav className="flex justify-between items-center py-5 px-10">
                <div onClick={()=>{location.href=""}} className="gap-3 hover:font-extrabold cursor-pointer flex items-center font-mono font-semibold text-3xl">
                <img className="w-[70px]" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fraw.githubusercontent.com%2Fmustafaynk%2Ftodolist%2Fmaster%2Fappgallery%2Flogo.png&f=1&nofb=1&ipt=94d335279d260e398cf2c79ee4f26d06182fde8f063007922c5814ad5c65c236" alt=""/>
                <span style={{fontFamily:"monospace"}}>TodoList</span>
                </div>
                <div  className="flex gap-12 px-10 items-center">
                <button className="hover:scale-105 transition-transform" type="button" onClick={()=>{if(mode=="dark"){setMode("light"); setBgColor("white"); setColor("rgb(22, 22, 23)")}else{setMode("dark"); setBgColor("rgb(22, 22, 23)"); setColor("white")}}}>
                    {mode=="dark" &&
                <img className="w-[60px]" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fimages-and-photography-2%2F24%2Flight-mode-dark-light-512.png&f=1&nofb=1&ipt=e3d164ec9622195fc6712e2c312cbefcd4561ebb0713c18602ed09c99d029cc3" alt=""/>
                    }
                    {mode=="light" && <img className="w-[60px]" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fuser-interface-2064%2F24%2FUI_Essential_icon_2_Filled_Line_expanded-24-1024.png&f=1&nofb=1&ipt=8ddfe01f87438fa5c0504491a3de0182882a69ce46ebc35bd21a3d76211d20b3" alt=""/>
                    }
                </button>
                    <button type="button" className="border rounded-lg px-3 hover:scale-105 transition-transform font-mono font-normal py-1" style={{borderColor:Color,backgroundColor:bgColor}}>Your Tasks</button>
                </div>
            </nav>

    </div>
    )
}
export default Navbar
