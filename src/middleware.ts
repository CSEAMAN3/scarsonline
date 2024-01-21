import { NextResponse } from "next/server";

const allowedOrigins = process.env.NODE_ENV === "production" 
? ['https://www.scarsonline.co.uk'] : 
["http://localhost:3000"]

export function middleware(request : Request) {

  const origin = request.headers.get("origin")
  console.log(origin)

  if(origin && !allowedOrigins.includes(origin)){
    return new NextResponse(null, {
      status: 400,
      statusText: "bad request",
      headers: {
        "Content-Type": "text/plain"
      }
    })
  }

  console.log("middleware!")
  console.log(request.method)
  console.log(request.url)

  return NextResponse.next()
}

export const config = {
  matcher: "/api/:path*"
}