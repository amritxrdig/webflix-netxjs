import Link from "next/link";
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";

function ContactCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-transparent p-4 text-center border border-red-500 rounded-lg shadow-md">
        <i className="text-red-500 text-3xl">
          <MdEmail />
        </i>
        <h2 className="text-white text-lg font-semibold mt-4">Email</h2>
        <p className="text-white">Monday to Friday Expected</p>
        <p className="text-white">Response time: 72 hours</p>
        <Link
          href="/"
          passHref
          className="text-red-500 font-semibold mt-4 inline-block"
        >
          Send Email &rarr;
        </Link>
      </div>
      <div className="bg-transparent p-4 text-center border border-red-500 rounded-lg shadow-md">
        <i className="text-red-500 text-3xl">
          <MdVoiceChat />
        </i>
        <h2 className="text-white text-lg font-semibold mt-4">Live Chat</h2>
        <p className="text-white">Weekdays: 9AM - 6 PM ET</p>
        <p className="text-white">Response time: 72 hours</p>
        <Link
          href="/"
          passHref
          className="text-red-500 font-semibold mt-4 inline-block"
        >
          Chat Now &rarr;
        </Link>
      </div>
      <div className="bg-transparent p-4 text-center border border-red-500 rounded-lg shadow-md">
        <i className="text-red-500 text-3xl">
          <MdForum />
        </i>
        <h2 className="text-white text-lg font-semibold mt-4">
          Community Forum
        </h2>
        <p className="text-white">Monday to Friday Expected</p>
        <p className="text-white">Response time: 72 hours</p>
        <Link
          href="/"
          passHref
          className="text-red-500 font-semibold mt-4 inline-block"
        >
          Ask The Community &rarr;
        </Link>
      </div>
    </div>
  );
}

export default ContactCard;
