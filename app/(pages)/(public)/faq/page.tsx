"use client";

import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is TimelyCapsule?",
    answer:
      "TimelyCapsule is a digital time capsule platform that allows you to preserve and share memories, documents, and media that can be accessed at specific dates in the future.",
  },
  {
    question: "How do I create a time capsule?",
    answer:
      "Click the 'Create' button in the top navigation bar, choose your content type (photos, videos, documents, etc.), set a future date for the capsule to be opened, and add your document.",
  },
  {
    question: "Can I edit a capsule after creating it?",
    answer:
      "Yes, you can edit your capsule's content and settings until it's locked. Once locked, the capsule cannot be modified until its scheduled opening date.",
  },
  {
    question: "How secure are my capsules?",
    answer:
      "We use industry-standard encryption to protect your data. Your capsules are stored securely and can only be accessed by authorized recipients on the specified date.",
  },
  {
    question: "What file types are supported?",
    answer:
      "TimelyCapsule supports most common file types including images (JPG, PNG, GIF), videos (MP4, MOV), documents (PDF, DOC, TXT), and audio files (MP3, WAV).",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Help & FAQ</h1>
      <p className="text-gray-600 text-center mb-8">
        Find answers to commonly asked questions about TimelyCapsule
      </p>
      <div className="space-y-4 border rounded-lg">
        {faqs.map((faq, index) => (
          <div key={index} className=" mx-2 border-b-2 p-4">
            <button
              className="w-full text-black text-left font-bold flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <span>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 text-center border rounded-lg px-2 py-4">
        <h2 className="text-xl font-bold text-black">Still need help?</h2>
        <p className="text-gray-600">
          Our support team is always ready to assist you.
        </p>
        <button className="mt-4 bg-purple-600 text-white px-6 font-bold py-2 rounded-md hover:bg-pink-600">
          Contact Support
        </button>
      </div>
    </div>
  );
}
