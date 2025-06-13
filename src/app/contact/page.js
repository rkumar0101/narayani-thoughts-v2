import ContactForm from '@/components/ContactForm'; 

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Have an idea or just want to say hello? We&apos;d love to hear from you. Please fill out the form below to get in touch.
        </p>
        <div className="mt-12">
          {/* This is where your form component is rendered */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}