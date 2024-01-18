import { Metadata } from "next"

export const metadata : Metadata = {
  title: "self-care",
  description: "Discover the best self-care products, solutions and advice at ScarsOnline. Taking care of yourself is the most important aspect of your life."
}

export default function layout({children}:{children : React.ReactNode}) {
  return (
    <main>
      {children}
    </main>
  )
}
