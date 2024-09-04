import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs-section">
      <h3>Frequently Asked Questions</h3>
      <div className="accordion">
        {[
          {
            question: "What should I pack for a trekking trip?",
            answer:
              "A detailed list of essentials including clothing, gear, and personal items.",
          },
          {
            question: "How fit do I need to be to join a trek?",
            answer:
              "Explanation of fitness requirements for different difficulty levels.",
          },
          {
            question: "What is the best time of year for trekking?",
            answer:
              "Seasonal recommendations for various trekking destinations.",
          },
          {
            question: "Do you provide trekking equipment?",
            answer:
              "Information on equipment rental and what's included in the package.",
          },
          {
            question: "Is there an age limit for trekking?",
            answer: "Age recommendations and considerations for families.",
          },
        ].map((item, index) => (
          <div className="accordion-item" key={index}>
            <div
              className="accordion-header"
              onClick={() => handleAccordionToggle(index)}
            >
              <span>{item.question}</span>
              <div className={`arrowji ${openIndex === index ? "active" : ""}`}>
                ▼
              </div>
            </div>
            <div
              className="accordion-body"
              style={{ display: openIndex === index ? "block" : "none" }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
