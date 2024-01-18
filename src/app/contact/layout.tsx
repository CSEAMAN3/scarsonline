import { Metadata } from "next"

export const metadata : Metadata = {
  title: "Contact ScarsOnline",
  description: "Get in touch to be featured on ScarsOnline.",
}

export default function layout({children} : {children : React.ReactNode}) {
  return (
    <main>
      {children}
    </main>
  )
}
