import Link from "next/link"
import Nav from "./Nav"
import BurgerNav from "./BurgerNav"


export default function Header() {
  return (
    <header  className="px-8 mb-4">
      <div className="py-8 border-black border-b flex justify-between items-center">
        <h1 className=""><Link href="/">ScarsOnline</Link></h1>
        <div className="hidden sm:block">
          <Nav />
        </div>
        <div className="sm:hidden">
          <BurgerNav />
        </div>
      </div>
    </header>
  )
}
