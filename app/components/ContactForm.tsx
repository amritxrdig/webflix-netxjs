"use client";
import { useState } from "react";

function ContactForm() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form className="max-w-md mx-auto bg-black text-white p-6 mt-12">
      <h2 className="text-2xl font-bold mb-4 text-center">
        We&apos;d love to hear <span className="text-red-500">From You</span>
      </h2>
      <div className="mb-4">
        <label
          className="block text-gray-400 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="appearance-none bg-gray-800 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-500"
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-400 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="appearance-none bg-gray-800 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-500"
          id="username"
          type="text"
          name="username"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-400 text-sm font-bold mb-2"
          htmlFor="phone"
        >
          Phone
        </label>
        <input
          className="appearance-none bg-gray-800 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-500"
          id="phone"
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-400 text-sm font-bold mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="appearance-none bg-gray-800 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-500"
          id="message"
          name="message"
          placeholder="Enter your message"
          rows={4}
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline float-right"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
