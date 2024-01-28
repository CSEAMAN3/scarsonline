'use client'

import { headerNav } from "@/lib/nav"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function BurgerNav() {

  const [menuStatus, setMenuStatus] = useState(false)

  const pathname = usePathname()

  const classes = menuStatus ? "block" : "hidden"

  return (
    <div>
      <div onClick={() => setMenuStatus(!menuStatus)} className="group cursor-pointer">
        <div className="border border-x-0 border-y-1 border-black group-hover:border-orange-500 rounded-sm w-8 mb-2"></div>
        <div className="border border-x-0 border-y-1 border-black group-hover:border-orange-500 rounded-sm w-8 mb-2"></div>
        <div className="border border-x-0 border-y-1 border-black group-hover:border-orange-500 rounded-sm w-8"></div>
      </div>
      <div className={`${classes} bg-orange-500 absolute w-screen h-full top-0 left-0`}>
        <div onClick={() => setMenuStatus(!menuStatus)} className={`${classes} group w-8 h-8 absolute top-7 right-8 cursor-pointer`}>
          <div className="bg-white border border-white group-hover:border-sky-700 border-x-0 border-y-1 rounded-sm rotate-45 w-8 h-[1px] group-hover:bg-sky-700 absolute top-[14px]"></div>
          <div className="bg-white border border-white group-hover:border-sky-700 border-x-0 border-y-1 rounded-sm -rotate-45 w-8 h-[1px] group-hover:bg-sky-700 absolute top-[14px]"></div>
        </div>
        <nav className="mt-24 px-8">
          <ul>
            {headerNav.map((link)=>{
              const isActive = pathname === link.href
              return (
                <li key={link.title} className="mb-8">
                  <Link 
                    onClick={() => setMenuStatus(!menuStatus)}
                    href={link.href}
                    className={`${isActive ? "text-sky-700 hover:text-sky-700" : "hover:text-sky-700"} font-bold text-white text-xl`}
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
