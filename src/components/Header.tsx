import Nav from "./Nav"


export default function Header() {
  return (
    <header  className="px-8 mb-4">
      <div className="py-8 border-black border-b flex justify-between">
        <h1 className="">ScarsOnline</h1>
        <Nav />
      </div>
    </header>
  )
}
