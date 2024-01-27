'use client'
import { headerNav } from "@/lib/nav"
import Link from "next/link"
import { useState } from "react"

export default function BurgerNav() {

  const [menuStatus, setMenuStatus] = useState(false)

  const classes = menuStatus ? "block" : "hidden"

  // function handleMenuStatus(){
  //   setMenuStatus((status) => {
  //     const burgerMenu = document.getElementById("burgerContainer")
  //     if(status){
  //       burgerMenu?.classList.remove("block")
  //       burgerMenu?.classList.add("hidden")
  //     }else if(!status){
  //       burgerMenu?.classList.remove("hidden")
  //       burgerMenu?.classList.add("block")
  //     }
  //     return !status
  //   })
  // }

  return (
    <div>
      {/* <div onClick={handleMenuStatus} className="cursor-pointer "> */}
      <div onClick={() => setMenuStatus(!menuStatus)} className="cursor-pointer ">
        <div className="border border-x-0 border-y-1 border-black rounded-sm w-8 mb-2"></div>
        <div className="border border-x-0 border-y-1 border-black rounded-sm w-8 mb-2"></div>
        <div className="border border-x-0 border-y-1 border-black rounded-sm w-8"></div>
      </div>
      <div id="burgerContainer" className={`${classes} bg-orange-500 absolute w-screen h-full top-0 left-0`}>
        {/* <div onClick={handleMenuStatus} className="w-8 h-8 relative top-8 left-[88%] cursor-pointer"> */}
        <div onClick={() => setMenuStatus(!menuStatus)} className={`${classes} w-8 h-8 relative top-8 left-[88%] cursor-pointer`}>
          <div className="bg-white border border-white border-x-0 border-y-1 rounded-sm rotate-45 w-8 absolute top-[14px]"></div>
          <div className="bg-white border border-white border-x-0 border-y-1 rounded-sm -rotate-45 w-8 absolute top-[14px]"></div>
        </div>
        <nav className="mt-16 px-8">
          <ul>
            {headerNav.map((link)=>{
              return (
                <li key={link.title} className="mb-8">
                  <Link 
                    // onClick={handleMenuStatus}
                    onClick={() => setMenuStatus(!menuStatus)}
                    href={link.href}
                    className="font-bold text-white text-xl hover:text-sky-700"
                  >
                    {link.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}
