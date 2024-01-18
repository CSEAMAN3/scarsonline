import { Metadata } from "next"

export const metadata : Metadata = {
  title: "relaxation",
  description: "Learn how to relax and unwind with the best advice, tips and products from ScarsOnline.",
}

export default function layout({children} : {children : React.ReactNode}) {
  return (
    <main>
      {children}
    </main>
  )
}
