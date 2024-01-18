'use client'

import { headerNav } from "@/lib/nav"
import Link from "next/link"

import { usePathname } from "next/navigation"

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav>
      <ul className="flex space-x-4">
        {headerNav.filter((link) => link.href !== "/").map((link) => {
          const isActive = pathname === link.href
          return (
            <li key={link.title}>
              <Link href={link.href} className={`${isActive ? "text-orange-500 hover:text-orange-500" : "hover:text-sky-500"}`}>{link.title}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
