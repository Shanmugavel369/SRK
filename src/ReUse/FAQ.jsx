// src/components/FAQ.jsx
import { useState } from "react";

export default function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mt-10 p-6 rounded-lg shadow-lg bg-white">
      <h3 className="font-bold text-2xl mb-6">FAQ</h3>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition"
            >
              <span className="font-medium">{faq.question}</span>
              <span>{openIndex === idx ? "−" : "+"}</span>
            </button>
            {openIndex === idx && (
              <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
