import React, { useState } from "react";

export default function SubscribeButton() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    // Here you can implement your subscription logic
    console.log(`Subscribing email: ${email}`);
    // For demonstration purposes, let's just display a message
    alert(`Subscribing email: ${email}`);
  };

  return (
    <div className="mt-6 flex max-w-md gap-x-4">
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={handleEmailChange}
        className="min-w-0 w-96 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        placeholder="Enter your email"
      />
      <button
        type="button"
        onClick={handleSubscribe}
        className="flex-none w-24 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Subscribe
      </button>
    </div>
  );
}
