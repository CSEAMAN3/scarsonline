'use client'

import { FormEvent, useState } from "react"

export default function Form() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("data", name, email, message)
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={ (e) => setName(e.target.value)} value={name} type="text" placeholder="name" />
      <input onChange={ (e) => setEmail(e.target.value)} value={email} type="email" placeholder="email" />
      <textarea onChange={ (e) => setMessage(e.target.value)} value={message}></textarea>
      <button type="submit">Send Message</button>
    </form>
  )
}

