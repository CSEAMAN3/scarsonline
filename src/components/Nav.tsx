import { headerNav } from "@/lib/nav"
import Link from "next/link"

export default function Nav() {
  return (
    <nav>
      <ul className="flex space-x-4">
        {headerNav.map((link) => {
          return (
            <li key={link.name}><Link href={link.href}>{link.name}</Link></li>
          )
        })}
      </ul>
    </nav>
  )
}
