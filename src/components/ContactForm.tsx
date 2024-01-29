'use client'

import { ChangeEvent, FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import Script from "next/script"

const initdata = {
  name: "",
  useremail: "",
  message: "",
}

export default function ContactForm() {


  const router = useRouter()
  const [formData, setFormData] = useState(initdata)

  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name
    setFormData((prevFormData) => ({...prevFormData, [name]:e.target.value}))
  }

  const handleForm = async(e: FormEvent<HTMLFormElement>) => {
    
    e.preventDefault()
    console.log(formData)

    const {name, useremail, message} = formData

    const res = await fetch("https://scarsonline.co.uk/api/resend/send-email", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({name, useremail, message})
    })

    const result = await res.json()
    console.log(result)
    router.push("/thankyou")
  }

// below handle form is for development only
  //   const handleForm = async(e: FormEvent<HTMLFormElement>) => {
    
  //   e.preventDefault()
  //   console.log(formData)

  //   const {name, useremail, message} = formData

  //   const res = await fetch("http://localhost:3000/api/resend/send-email", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type" : "application/json"
  //     },
  //     body: JSON.stringify({name, useremail, message})
  //   })

  //   const result = await res.json()
  //   console.log(result)
  //   router.push("/thankyou")
  // }

// above handleform is for development only

  return (
    <>
    <Script 
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload" // Loads the script when needed
        onLoad={() => {
          console.log("Turnstile script loaded!");
        }}
      />
    <form onSubmit={handleForm} className="flex flex-col">

      <label 
        htmlFor="name"
        className="font-bold"
      >
        Name:
      </label>
      <input
        placeholder="your name..."
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleInput}
        className="border border-black rounded-sm p-2 max-w-[400px] mb-4"
        required
      />

      <label 
        htmlFor="useremail"
        className="font-bold"
      >
        Email:
      </label>
      <input
        placeholder="your email..."
        type="email"
        name="useremail"
        id="useremail"
        value={formData.useremail}
        onChange={handleInput}
        className="border border-black rounded-sm p-2 max-w-[400px] mb-4"
        required
      />

      <label 
        htmlFor="message"
        className="font-bold"
      >
        Message:
      </label>
      <textarea 
        placeholder="your message..."
        name="message" 
        id="message"
        value={formData.message}
        onChange={handleInput}
        className="p-2 max-w-[400px] min-h-[300px] border border-black rounded-sm mb-4"
        required
      />

      {/* cloudflare turnstile div */}
      {/* <div 
        id="myTurnstile"
        className="cf-turnstile" 
        data-theme="light"
        data-sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY}
      ></div> */}

      <button type="submit" className="font-bold text-white bg-orange-400 p-2 max-w-[400px] mb-8 hover:shadow-inner rounded-sm">SEND</button>

    </form>
    </>
  )
  }
