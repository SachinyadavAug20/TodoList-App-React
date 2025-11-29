import { useState } from "react"

const Navbar = (props) => {
    const [bgColor, setBgColor] = useState("rgb(22, 22, 23)");
    const [Color, setColor] = useState("white");

    return (
        <div style={{ backgroundColor: bgColor, color: Color }} className={props.isDarkMode?"transition-all border-gray-300 border-t-0 border rounded-b-xl sm:rounded-b-2xl lg:rounded-b-3xl duration-150": "transition-all border-gray-900 border-t-0 border rounded-b-xl sm:rounded-b-2xl lg:rounded-b-3xl duration-150"}>
            <nav className="flex flex-col sm:flex-row justify-between items-center py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-10 gap-3 sm:gap-0">
                <div onClick={() => { location.href = "" }} className="gap-2 sm:gap-3 hover:font-extrabold cursor-pointer flex items-center font-mono font-semibold text-xl sm:text-2xl lg:text-3xl">
                    <img className="w-[50px] sm:w-[60px] lg:w-[70px]" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fraw.githubusercontent.com%2Fmustafaynk%2Ftodolist%2Fmaster%2Fappgallery%2Flogo.png&f=1&nofb=1&ipt=94d335279d260e398cf2c79ee4f26d06182fde8f063007922c5814ad5c65c236" alt="" />
                    <span style={{ fontFamily: "monospace" }} className="flex flex-col sm:flex-row items-start sm:items-center">
                        <span>TodoList</span>
                        <span className="text-[12px] sm:text-[14px] lg:text-[18px] font-mono font-semibold ml-0 sm:ml-2 mt-[-2px] sm:mt-0">- Manage your todos at one page</span>
                    </span>
                </div>
                <div className="flex gap-4 sm:gap-8 lg:gap-12 px-2 sm:px-6 lg:px-10 items-center">
                    <button className="hover:scale-105 transition-transform" type="button" onClick={() => { if (props.isDarkMode) {props.setIsDarkMode(!props.isDarkMode); setBgColor("white"); setColor("rgb(22, 22, 23)") } else { props.setIsDarkMode(!props.isDarkMode); setBgColor("rgb(22, 22, 23)"); setColor("white") } }}>
                        {props.isDarkMode &&
                            <img className="w-[40px] sm:w-[50px] lg:w-[60px]" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fimages-and-photography-2%2F24%2Flight-mode-dark-light-512.png&f=1&nofb=1&ipt=e3d164ec9622195fc6712e2c312cbefcd4561ebb0713c18602ed09c99d029cc3" alt="" />
                        }
                        {!props.isDarkMode  &&
                            <img className="w-[40px] sm:w-[50px] lg:w-[60px]" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fuser-interface-2064%2F24%2FUI_Essential_icon_2_Filled_Line_expanded-24-1024.png&f=1&nofb=1&ipt=8ddfe01f87438fa5c0504491a3de0182882a69ce46ebc35bd21a3d76211d20b3" alt="" />
                        }
                    </button>
                    <button type="button" className="border rounded-md sm:rounded-lg px-2 sm:px-3 hover:scale-105 transition-transform font-mono font-normal py-1 text-sm sm:text-base" style={{ borderColor: Color, backgroundColor: bgColor }}>Your Tasks</button>
                </div>
            </nav>
        </div>

    )
}
export default Navbar
