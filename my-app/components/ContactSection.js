import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission status

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Simulate successful form submission (if you want to trigger the state change manually)
    setIsSubmitted(true);
  };

  return (
    <section className="flex flex-col items-center justify-center py-16 bg-gray-800 text-white min-h-screen px-4">
      {!isSubmitted ? (
        <form
          action="https://formspree.io/f/mvggyyen"
          method="POST"
          className="w-full max-w-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl font-bold mb-8 text-center sm:text-left">
            Contact Me
          </h2>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="4"
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 text-white font-semibold rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 active:scale-95"
          >
            Send
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-6">Thank You!</h2>
          <p className="text-lg mb-6">
            Your message has been sent successfully. I will get back to you as
            soon as possible.
          </p>
          <Image
            src="/images/icegif.gif"
            alt="Ice GIF"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
