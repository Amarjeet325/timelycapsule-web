// @components/Hero.tsx

"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { question: "What can I include in a TimelyCapsule?", answer: "" },
  {
    question: "Can I customize the unlock date after creating a capsule?",
    answer: "",
  },
  { question: "Is my data safe with TimelyCapsule?", answer: "" },
  { question: "Is TimelyCapsule free to use?", answer: "" },
];

export default function Hero() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-r from-gray-800 to-green-400 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">
          Frequently Asked <span className="text-green-200">Questions</span>
        </h2>
        <p className="mb-12">Your Questions, Sealed & Answered</p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex justify-between items-center cursor-pointer border-b pb-4"
              onClick={() => toggleFAQ(index)}
            >
              <div className="text-left">
                <p className="text-lg font-semibold">{faq.question}</p>
              </div>
              <Plus className="text-white" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Card Section */}
      <div className="bg-white text-black mt-16 p-8 rounded-2xl shadow-lg border-2 border-blue-400 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">
          Your Future Self is Waiting...
        </h3>
        <p className="mb-6">
          The best time to send a memory was yesterday. The second-best is
          today.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded">
          Sign Up Now
        </button>

        {/* Chat Mockup */}
        <div className="flex mt-6 justify-center">
          <div className="bg-gray-100 p-4 rounded-lg shadow w-64">
            <div className="text-sm text-gray-600 mb-2">
              Hey! Have you heard about TimelyCapsule?
            </div>
            <div className="bg-green-400 text-white p-2 rounded-lg text-sm inline-block mt-2">
              Hey! Have you heard about TimelyCapsule?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
