import { EmailTemplate } from '@/components/email-template';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { limiter } from '../../config/limiter';


const resend = new Resend(process.env.RESEND_API_KEY);
const email = process.env.EMAIL as string


type FormData = {
  name: string,
  useremail: string,
  message: string,
  // turnstileToken?: string,
}


export async function POST(request : NextRequest) {

  const remaining = await limiter.removeTokens(1)
  const origin = request.headers.get('origin') || "www.scarsonline.co.uk"

  if(remaining < 1){
    return new NextResponse(null, {
      status: 429,
      statusText: "to many requests",
      headers: {
        "Access-Control-Allow-Origin": origin,
        "Content-Type": "text/plain" 
      }
    })
  }

  const data : FormData = await request.json()
  const {name, useremail, message} = data

  if (!name || !useremail || !message) {
    return NextResponse.json({
      status: 422,
      message: "Unprocessable entity - missing fields"
    });
  }

  try {
    const data = await resend.emails.send({
      from: 'contactform@scarsonline.co.uk',
      to: [email],
      reply_to: useremail,
      subject: 'Enquiry',
      text: `Message from : ${name}, Reply email: ${useremail}, Message: ${message}`,
      react: EmailTemplate({ name: name, message: message, useremail: useremail }),
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
