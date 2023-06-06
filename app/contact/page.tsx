import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white-800 mb-4 text-center">
          Contact Us
        </h1>
        <ContactCard />
        <ContactForm />
      </div>
    </div>
  );
}
