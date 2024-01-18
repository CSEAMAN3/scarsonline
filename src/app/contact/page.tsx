import ContactForm from "@/components/ContactForm";

export default function ContatcPage() {
  return (
    <div>
      <h2 className="font-bold text-2xl">Get in touch...</h2>
      <p className="font-light">If you would like to be featured on ScarsOnline site we would love to hear from you.</p>
      <p className="font-light mb-8">Simply complete the contact form and we will be in touch.</p>
      <ContactForm />
    </div>
  )
}
