'use client'

import { useState } from "react"

export default function ContactForm() {



  return (
    <form action="" className="flex flex-col">

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
        className="border border-black rounded-sm p-2 max-w-[400px] mb-4"
      />

      <label 
        htmlFor="from"
        className="font-bold"
      >
        Email:
      </label>
      <input
        placeholder="your email..."
        type="text"
        name="from"
        id="from"
        className="border border-black rounded-sm p-2 max-w-[400px] mb-4"
      />

      <label 
        htmlFor="content"
        className="font-bold"
      >
        Message:
      </label>
      <textarea 
        placeholder="your message..."
        name="content" 
        id="content" 
        className="p-2 max-w-[400px] min-h-[300px] border border-black rounded-sm mb-4" 
      />

    <button type="submit" className="font-bold text-white bg-orange-400 p-2 max-w-[400px] mb-8 hover:shadow-inner rounded-sm">SEND</button>

    </form>
  )
}
